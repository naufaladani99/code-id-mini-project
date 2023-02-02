import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
export default function MyComboBox() {
  return (
    <p>
      <div className='flex flex-col'>
        <label htmlFor='addressLine1'>People</label>
        <Combobox
          value={selectedAddress}
          onChange={setSelectedAddress}
          as='div'
        >
          <div className='relative w-full flex items-center rounded-lg px-2 border-1 ring-1 active:ring-2 ring-gray-500 active:ring-blue-500 border-gray-400'>
            <SearchIcon className='w-5 h-5 text-gray-500' />
            <Combobox.Input
              displayValue={formik.values.addressLine1}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              className='w-full bg-transparent border-0 ring-0 outline-none focus:ring-0 rounded-lg px-2 py-1'
              placeholder='Type your address here...'
            />
          </div>
          {filteredAddress.length > 0 && (
            <Combobox.Options
              static
              className='rounded-lg w-[90%] ring-1 ring-gray-500/75 absolute text-sm max-h-96 overflow-y-auto'
            >
              <div className='border-1 border-gray-500/75 bg-white'>
                {filteredAddress?.map((address) => (
                  <Combobox.Option key={address.addrId} value={address}>
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-2 ${
                          active ? 'bg-blue-600' : 'bg-white'
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            active ? 'text-white' : 'text-gray-700'
                          }`}
                        >
                          {address.addrLine1}
                        </span>
                        <span
                          className={`${
                            active ? 'text-indigo-200' : 'text-gray-600'
                          }`}
                        >
                          {address.addrLine2}
                        </span>
                        <span
                          className={`${
                            active ? 'text-indigo-200' : 'text-gray-500'
                          } font-thin text-xs`}
                        >
                          {address.addrPostalCode}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </div>
            </Combobox.Options>
          )}
        </Combobox>
      </div>
    </p>
  );
}

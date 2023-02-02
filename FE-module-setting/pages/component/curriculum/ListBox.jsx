import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

const statuses = [
  { id: 0, status: 'all' },
  { id: 1, status: 'online' },
  { id: 2, status: 'offline' },
];

export default function ListBox({ changeStatus }) {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
  useEffect(() => {
    changeStatus(selectedStatus);
  });
  return (
    <Listbox value={selectedStatus} onChange={setSelectedStatus}>
      <Listbox.Button className='relative font-bold tracking-tight capitalize text-gray-500 text-xs px-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'>
        <span className='block tracking-wide truncate'>
          {selectedStatus.status}
        </span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <ChevronDownIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter='transition ease-in duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Listbox.Options className='absolute right-40 top-[200px] mt-1 max-h-60 w-1/5 overflow-auto rounded-lg bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
          {statuses.map((status) => (
            <Listbox.Option
              key={status.id}
              value={status}
              className={({ active }) =>
                `relative cursor-default tracking-wide select-none py-2 pl-10 pr-4 capitalize ${
                  active ? 'bg-blue-500 text-blue-900' : 'text-gray-700'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {status.status}
                  </span>
                  {selected ? (
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-300'>
                      <CheckIcon className='h-5 w-5' aria-hidden='true' />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

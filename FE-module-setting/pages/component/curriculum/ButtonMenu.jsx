import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import RemoveModal from '../../component/curriculum/RemoveModal';

export default function ButtonMenu({ curriculum }) {
  const removeButton = useRef();

  function openRemoveModal() {
    removeButton.current.click();
  }

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div className='hidden'>
          <RemoveModal
            buttonRef={removeButton}
            modalTitle={'Curriculum'}
            id={curriculum.id}
          >
            Are you sure want to remove this {curriculum.name}
          </RemoveModal>
        </div>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <DotsVerticalIcon className='w-5 h-5 text-gray-500' />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`/app/curriculum/edit/${curriculum.id}`}
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className='mr-2 h-5 w-5 text-blue-400'
                        aria-hidden='true'
                      />
                    ) : (
                      <EditInactiveIcon
                        className='mr-2 h-5 w-5 text-blue-400'
                        aria-hidden='true'
                      />
                    )}
                    Edit
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => openRemoveModal()}
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className='mr-2 h-5 w-5 text-blue-400'
                        aria-hidden='true'
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className='mr-2 h-5 w-5 text-blue-400'
                        aria-hidden='true'
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill=''
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill=''
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill=''
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path d='M3 6H17' stroke='#A78BFA' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill=''
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path d='M3 6H17' stroke='#C4B5FD' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#C4B5FD' strokeWidth='2' />
    </svg>
  );
}

import React, {Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { HiDotsVertical } from 'react-icons/hi'
import UpdateModal from './UpdateModal'
import { DelJopoRequest } from '../../redux-saga/Action/JopoAction'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MinimalMenu() {

  const dispatch = useDispatch();
  

  const removeAction = (id) => {
      dispatch(DelJopoRequest(id));
      return;
    }

  return (
    <Menu as="div" className="ml-2 relative inline-block text-left">
      <div>
        <Menu.Button className="ml-2 text-black focus:ring-4 focus:ring-green-300 font-medium text-sm px-4 py-1 text-center inline-flex items-center">
          <HiDotsVertical className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-40 mt-2 mb w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                  <UpdateModal className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}/>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => removeAction(id)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'rounded-md bg-blue-700 bg-opacity-75 px-4 py-2 text-sm font-medium text-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MinimalMenu
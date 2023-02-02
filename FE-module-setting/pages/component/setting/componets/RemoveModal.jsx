import {
  ArrowNarrowLeftIcon,
  TrashIcon,
  DocumentRemoveIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeAddressRequest,
  removeEducationRequest,
  removeEmailRequest,
  removeExperienceRequest,
  removePhoneRequest,
  removeSkillRequest,
} from '../../../redux-saga/Action/profileAction';

export default function RemoveModal({ modalTitle, id, children }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const removeAction = (name, id) => {
    if (name === 'email') {
      dispatch(removeEmailRequest(id));
      closeModal();
      return;
    }
    if (name === 'phone') {
      dispatch(removePhoneRequest(id));
      closeModal();
      return;
    }
    if (name === 'address') {
      dispatch(removeAddressRequest(id));
      closeModal();
      return;
    }
    if (name === 'education') {
      dispatch(removeEducationRequest(id));
      closeModal();
      return;
    }
    if (name === 'experience') {
      dispatch(removeExperienceRequest(id));
      closeModal();
      return;
    }
    if (name === 'skill') {
      dispatch(removeSkillRequest(id));
      closeModal();
      return;
    }
  };

  return (
    <>
      {modalTitle === 'skill' ? (
        <>
          <button
            onClick={openModal}
            className='border-2  rounded-full text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3 hover:scale-105 active:scale-90 active:shadow-md duration-300 p-1'
          >
            <TrashIcon className='w-5 h-5 ' />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={openModal}
            className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
          >
            <div className='flex items-center space-x-1'>
              <TrashIcon className='w-5 h-5 inline-block' />
              {/* <span>Delete</span> */}
            </div>
          </button>
        </>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    <div className='flex items-center space-x-2'>
                      <DocumentRemoveIcon className='w-5 h-5 inline-block' />
                      <span>Remove {modalTitle}</span>
                    </div>
                  </Dialog.Title>

                  <div>{children}</div>
                  <div className='mt-4 flex gap-2 justify-end'>
                    <button
                      type='submit'
                      className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                      onClick={() => removeAction(modalTitle, id)}
                    >
                      <div className='flex items-center space-x-1'>
                        <TrashIcon className='w-5 h-5 inline-block' />
                        <span>Remove</span>
                      </div>
                    </button>
                    <button
                      type='button'
                      className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                      onClick={closeModal}
                    >
                      <div className='flex items-center space-x-1'>
                        <ArrowNarrowLeftIcon className='w-5 h-5 inline-block' />
                        <span>Cancel</span>
                      </div>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

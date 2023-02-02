import {
  ArrowNarrowLeftIcon,
  TrashIcon,
  DocumentRemoveIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCurriculumReq } from '../../redux-saga/Action/curriculumAction';

export default function RemoveModal({ modalTitle, id, children, buttonRef }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function removeAction(id) {
    console.log(id);
    dispatch(removeCurriculumReq(id));
    closeModal();
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={openModal}
        className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
      >
        <div className='flex items-center space-x-1'>
          <TrashIcon className='w-5 h-5 inline-block' />
          <span>Delete</span>
        </div>
      </button>

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
                      className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                      onClick={() => removeAction(id)}
                    >
                      <div className='flex items-center space-x-1'>
                        <TrashIcon className='w-5 h-5 inline-block' />
                        <span>Remove</span>
                      </div>
                    </button>
                    <button
                      type='button'
                      className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
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

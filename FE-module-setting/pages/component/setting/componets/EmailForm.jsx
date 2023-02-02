import {
  PlusIcon,
  SaveIcon,
  PencilAltIcon,
  ArrowNarrowLeftIcon,
  MailIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addEmailRequest,
  updateEmailRequest,
} from '../../../redux-saga/Action/profileAction';
import { toast } from 'react-toastify';

export default function EmailForm({ edit }) {
  let [isOpen, setIsOpen] = useState(false);
  const { emails } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      emailId: edit ? Number(edit.pmailId) : '',
      email: edit ? edit.pmailAddress : '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string('email shoult be a string')
        .max(50, 'max character email is 50')
        .email('please provite correct email')
        .required('please insert your email'),
    }),

    onSubmit: async (values) => {
      const emailExist = emails.filter(
        (email) => values.email === email.pmailAddress
      );
      if (emailExist.length > 0) {
        formik.resetForm();
        closeModal();
        return toast.warning('Email Already Exist', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }

      if (edit) {
        dispatch(updateEmailRequest(values));
        closeModal();
        return;
      }

      dispatch(addEmailRequest(values));
      closeModal();
      formik.resetForm();
    },
  });

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
        >
          <div className={`flex items-center ${edit ? '' : 'space-x-1'}`}>
            {edit ? (
              <PencilAltIcon className='w-5 h-5 inline-block' />
            ) : (
              <PlusIcon className='w-5 h-5 inline-block' />
            )}
            <span>{edit ? '' : 'Add Email'}</span>
          </div>
        </button>
      </div>

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
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <MailIcon className='w-6 h-6 inline-block' />
                    {edit ? 'Update' : 'Add'} Email
                  </Dialog.Title>

                  <div>
                    <form
                      className='flex flex-col gap-3'
                      onSubmit={formik.handleSubmit}
                    >
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='email'>New Email</label>
                        <input
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='rounded-lg px-2 py-1'
                          type='email'
                          name='email'
                          id='email'
                          placeholder='ex. johndoe@gmail.com'
                        />
                      </div>
                      {formik.touched.email && formik.errors.email ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.email}
                        </span>
                      ) : null}
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                          // onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <SaveIcon className='w-5 h-5 inline-block' />
                            <span>{edit ? 'Update' : 'Save'}</span>
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
                    </form>
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

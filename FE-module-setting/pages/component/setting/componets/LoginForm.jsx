import {
  PencilAltIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  LockClosedIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { updatePasswordRequest } from '../../../redux-saga/Action/profileAction';

export default function LoginForm() {
  let [isOpen, setIsOpen] = useState(false);

  const id = useSelector((state) => state.profile.profile.userId);

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
    formik.resetForm();
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      userId: id,
      currentPassword: '',
      userPassword: '',
      reUserPassword: '',
    },
    validationSchema: Yup.object().shape({
      currentPassword: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required('Insert your current password'),
      userPassword: Yup.string()
        .min(3, 'minimal 3 character')
        .max(25, 'maximal 25 character')
        .required('Insert your new password'),
      reUserPassword: Yup.string().when('userPassword', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('userPassword')],
          'Both password need to be the same'
        ),
      }),
    }),

    onSubmit: (values) => {
      const payload = {
        userId: values.userId,
        currentPassword: values.currentPassword,
        userPassword: values.userPassword,
      };
      dispatch(updatePasswordRequest(payload));
      setIsOpen(false);
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
          <div className='flex items-center space-x-1'>
            <PencilAltIcon className='w-5 h-5 inline-block' />
            <span>Change Password</span>
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
                    <LockClosedIcon className='w-6 h-6 inline-block' />
                    Login Edit
                  </Dialog.Title>

                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='currentPassword'>
                          Current Password
                        </label>
                        <div className='flex flex-col'>
                          <input
                            value={formik.values.currentPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1'
                            type='password'
                            name='currentPassword'
                            id='currentPassword'
                          />
                          {formik.touched.currentPassword &&
                          formik.errors.currentPassword ? (
                            <span className='mt-2 text-sm text-red-600'>
                              {formik.errors.currentPassword}
                            </span>
                          ) : null}
                        </div>

                        <label htmlFor='userPassword'>New Password</label>
                        <div className='flex flex-col'>
                          <input
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1'
                            type='password'
                            name='userPassword'
                            id='userPassword'
                          />
                          {formik.touched.userPassword &&
                          formik.errors.userPassword ? (
                            <span className='mt-2 text-sm text-red-600'>
                              {formik.errors.userPassword}
                            </span>
                          ) : null}
                        </div>

                        <label htmlFor='reUserPassword'>
                          Re-Type New Password
                        </label>
                        <div className='flex flex-col'>
                          <input
                            value={formik.values.reUserPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1'
                            type='password'
                            name='reUserPassword'
                            id='reUserPassword'
                          />
                          {formik.touched.reUserPassword &&
                          formik.errors.reUserPassword ? (
                            <span className='mt-2 text-sm text-red-600'>
                              {formik.errors.reUserPassword}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='mt-4 flex gap-2 justify-end'>
                        <button
                          type='submit'
                          className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                          // onClick={closeModal}
                        >
                          <div className='flex items-center space-x-1'>
                            <SaveIcon className='w-5 h-5 inline-block' />
                            <span>Update</span>
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

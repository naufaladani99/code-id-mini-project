import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  PhoneIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPhoneRequest,
  updatePhoneRequest,
} from '../../../redux-saga/Action/profileAction';
import { toast } from 'react-toastify';

export default function PhoneForm({ edit }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const phoneCode = ['Cell', 'Home'];
  const { phones } = useSelector((state) => state.profile);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      phoneId: edit ? edit.phoneId : '',
      phone: edit ? edit.uspoPhone : '',
      phoneCode: edit ? edit.pontyCode : '',
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string().required('Please provite your number'),
      phoneCode: Yup.string()
        .oneOf(phoneCode, 'Please Choose Phone Type')
        .required('Please Choose Phone Type'),
    }),

    onSubmit: async (values) => {
      if (edit) {
        dispatch(updatePhoneRequest(values));
      } else {
        const phoneExist = phones.filter(
          (phone) => phone.uspoPhone === values.phone
        );
        if (phoneExist.length > 0) {
          formik.resetForm();
          closeModal();
          return toast.warning('Phone Number Already Exist', {
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
        dispatch(addPhoneRequest(values));
        formik.resetForm();
      }
      closeModal();
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
            <span>{edit ? '' : 'Add Phone'}</span>
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
                    <PhoneIcon className='w-6 h-6 inline-block' />
                    {edit ? 'Update' : 'Add'} Phone
                  </Dialog.Title>

                  <div>
                    <form
                      className='flex flex-col gap-3'
                      onSubmit={formik.handleSubmit}
                    >
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='phone'>New Phone</label>
                        <input
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='phone'
                          id='phone'
                          placeholder='ex. 083456789098'
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.phone}
                        </span>
                      ) : null}
                      <div className='grid grid-cols-2 items-center mt-2 gap-3'>
                        <label htmlFor='phoneCode'>Phone Type</label>
                        <select
                          value={formik.values.phoneCode}
                          onSelect={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onChange={(e) =>
                            formik.setFieldValue('phoneCode', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 col-span-1'
                          name='phoneCode'
                          id='phoneCode'
                        >
                          <option value='Bachelor'>-- Phone Type --</option>
                          {phoneCode.map((code, i) => (
                            <option key={i} value={code}>
                              {code}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.touched.code && formik.errors.code ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.code}
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

import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  LocationMarkerIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAddressRequest,
  updateAddressRequest,
} from '../../../redux-saga/Action/profileAction';
import { toast } from 'react-toastify';

export default function AddressForm({ edit }) {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.profile);
  const addressTypes = useSelector((state) => state.profile.addressType);
  const { city } = useSelector((state) => state.profile);

  let [isOpen, setIsOpen] = useState(false);

  const oneOfCity = city?.map((ci) => ci.cityId);
  const oneOfaddress = addressTypes.map((addrs) => addrs.adtyId);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      addressId: edit ? edit.etadAddrId : '',
      addressLine1: edit ? edit.etadAddr.addrLine1 : '',
      addressLine2: edit ? edit.etadAddr.addrLine2 : '',
      postalCode: edit ? edit.etadAddr.addrPostalCode : '',
      cityId: edit ? edit.etadAddr.addrCity.cityId : '',
      addressType: edit ? edit.etadAdty.adtyId : '',
    },
    validationSchema: Yup.object().shape({
      addressLine1: Yup.string()
        .min(5)
        .max(255)
        .required('please provite your new Address'),
      addressLine2: Yup.string()
        .min(5)
        .max(255)
        .required('please provite your new Address'),
      postalCode: Yup.number().required('please provite a postal code'),
      cityId: Yup.number()
        .oneOf(oneOfCity, 'Pleace Choose City that we Provided')
        .required('please insert city'),
      addressType: Yup.number()
        .oneOf(oneOfaddress, 'Please Choose Address Type that we Provided')
        .required('please Choose the address type'),
    }),
    onSubmit: async (values) => {
      const addressExsist = addresses.filter(
        (address) =>
          values.addressLine1 === address.addrLine1 ||
          values.addressLine2 === address.addrLine2 ||
          values.postalCode === address.addrPostalCode
      );

      if (addressExsist.length > 0) {
        closeModal();
        return toast.warning('Address Exist, please try type another address', {
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
        dispatch(updateAddressRequest(values));
      } else {
        dispatch(addAddressRequest(values));
        formik.resetForm();
      }
      closeModal();
    },
  });

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className='px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
      >
        <div className={`flex items-center ${edit ? '' : 'space-x-1'}`}>
          {edit ? (
            <PencilAltIcon className='w-5 h-5 block' />
          ) : (
            <PlusIcon className='w-5 h-5 block' />
          )}
          <span>{edit ? '' : 'Add Address'}</span>
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
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <LocationMarkerIcon className='w-6 h-6 inline-block' />
                    {edit ? 'Update' : 'Add'} Address
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='flex flex-col'>
                        <label htmlFor='addressLine1'>New Address</label>
                        <input
                          value={formik.values.addressLine1}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='addressLine1'
                          id='addressLine1'
                          placeholder='ex. Jl.Melati no.10'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor='addressLine2'>Address Line 2</label>
                        <input
                          value={formik.values.addressLine2}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='addressLine2'
                          id='addressLine2'
                          placeholder='ex . Kec. Baru / Kab. Gowa'
                        />
                      </div>
                      <div className='flex items-center gap-3'>
                        <label htmlFor='postalCode'>Postal Code</label>
                        <input
                          value={formik.values.postalCode}
                          onChange={formik.handleChange}
                          className='rounded-lg px-2 py-1'
                          type='text'
                          name='postalCode'
                          id='postalCode'
                          placeholder='ex. 34045'
                        />
                        <label htmlFor='cityId'>City</label>
                        <select
                          value={formik.values.cityId}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'cityId',
                              Number(e.target.value)
                            )
                          }
                          className='rounded-lg px-2 py-1 w-2/5 capitalize'
                          name='cityId'
                          id='cityId'
                        >
                          <option>-Choose City-</option>
                          {city?.map((ci) => (
                            <option
                              className='capitalize'
                              key={ci.cityId}
                              value={ci.cityId}
                            >
                              {ci.cityName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='flex gap-3 items-center'>
                        <label htmlFor='addressType'>Address Type</label>
                        <select
                          value={formik.values.addressType}
                          onChange={(e) =>
                            formik.setFieldValue('addressType', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 w-2/5 capitalize'
                          name='addressType'
                          id='addressType'
                        >
                          <option>-Address Type-</option>
                          {addressTypes?.map((type) => (
                            <option
                              className='capitalize'
                              key={type.adtyId}
                              value={type.adtyId}
                            >
                              {type.adtyName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='flex flex-col space-x-1'>
                        {formik.touched.addressLine1 &&
                        formik.errors.addressLine1 ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressLine1}
                          </span>
                        ) : null}
                        {formik.touched.addressPostalCode &&
                        formik.errors.addressPostalCode ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressPostalCode}
                          </span>
                        ) : null}
                        {formik.touched.cityId && formik.errors.cityId ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.cityId}
                          </span>
                        ) : null}
                        {formik.touched.addressType &&
                        formik.errors.addressType ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.addressType}
                          </span>
                        ) : null}
                      </div>
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

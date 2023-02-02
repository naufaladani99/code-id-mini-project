import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  BookOpenIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  addExperienceRequest,
  updateExperienceRequest,
} from '../../../redux-saga/Action/profileAction';

const oneOfMonth = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function ExperienceForm({ edit }) {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const statusType = useSelector((state) => state.profile.statusType);
  const empType = useSelector((state) => state.profile.employeementType);
  const cities = useSelector((state) => state.profile.city);
  const oneOfCity = cities?.map((ci) => ci.cityId);
  const oneOfEmp = empType.map((emp) => emp.jotyName);
  const oneOfStatus = statusType.map((status) => status.status);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      educationId: edit ? edit.usexId : '',
      title: edit ? edit.usexTitle : '',
      profileHeadline: edit ? edit.usexProfileHeadline : '',
      employmentType: edit ? edit.usexEmploymentType : '',
      companyName: edit ? edit.usexCompanyName : '',
      isCurrent: edit ? edit.usexIsCurrent : '0',
      startDate: '',
      endDate: '',
      startYear: edit ? new Date(edit.usexStartDate).getFullYear() : '',
      startMonth: edit ? new Date(edit.usexStartDate).getMonth() : '',
      endYear: edit ? new Date(edit.usexEndDate).getFullYear() : '',
      endMonth: edit ? new Date(edit.usexEndDate).getMonth() : '',
      industry: edit ? edit.usexIndustry : '',
      desc: edit ? edit.usexDescription : '',
      cityId: '',
      experienceType: edit ? edit.usexExperienceType : '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(5, 'title at least 5 characters')
        .max(255, 'title max is 255 characters')
        .required('Please provite the Title'),
      profileHeadline: Yup.string()
        .min(5, 'title at least 5 characters')
        .max(512, 'title max is 512 characters')
        .required('Please provite the Profile Headline'),
      employmentType: Yup.string()
        .oneOf(oneOfEmp)
        .required('Please Choose Employeement Type that provided'),
      companyName: Yup.string()
        .min(5, 'Company name at least 5 characters')
        .max(255, 'Company nae max 255 Characters')
        .required('Please provite Company name'),
      isCurrent: Yup.string().oneOf(['0', '1']),
      startYear: Yup.string().required(
        'please insert start year of your Experience'
      ),
      endYear: Yup.string().required(
        'please insert end year of your Experience'
      ),
      startMonth: Yup.string().oneOf(
        oneOfMonth,
        'please choose start month of your Experience'
      ),
      endMonth: Yup.string().oneOf(
        oneOfMonth,
        'please choose start month of your Experience'
      ),
      industry: Yup.string()
        .min(5, 'Industry at least 5 characters short')
        .max(15, 'industri at max 15 characters long')
        .required('please provite industry'),
      desc: Yup.string().max(512, 'max character is 512').notRequired(),
      cityId: Yup.number()
        .oneOf(oneOfCity, 'Pleace Choose City that we Provided')
        .required('please choose city'),
      experienceType: Yup.string()
        .oneOf(oneOfStatus)
        .required('Please Choose Experience Type'),
    }),

    onSubmit: async (values) => {
      if (edit) {
        values.startDate = new Date(values.startYear, values.startMonth, 1);
        values.endDate = new Date(values.endYear, values.endMonth, 1);
        dispatch(updateExperienceRequest(values));
      } else {
        values.startDate = new Date(values.startYear, values.startMonth, 1);
        values.endDate = new Date(values.endYear, values.endMonth, 1);
        dispatch(addExperienceRequest(values));
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
            <span>{edit ? '' : 'Add Experience'}</span>
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
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all w-3/5 mx-auto'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <BookOpenIcon className='w-6 h-6 inline-block' />
                    {edit ? 'Update' : 'Add'} Experience
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='title'>
                          Title
                        </label>
                        <input
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='title'
                          id='title'
                          placeholder='ex. Software Engineer'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='profileHeadline'>
                          Headline
                        </label>
                        <input
                          value={formik.values.profileHeadline}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='profileHeadline'
                          id='profileHeadline'
                          placeholder='ex. Frond End Enthusiasm, Javascript Developer'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='companyName'>
                          Company
                        </label>
                        <input
                          value={formik.values.companyName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='companyName'
                          id='companyName'
                          placeholder='ex. Google / Neflix / Meta'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='cityId'>
                          City
                        </label>
                        <select
                          value={formik.values.cityId}
                          onBlur={formik.handleBlur}
                          onChange={(e) =>
                            formik.setFieldValue('cityId', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 col-span-1'
                          name='cityId'
                          id='cityId'
                        >
                          <option>-- City --</option>
                          {cities?.map((city) => (
                            <option key={city.cityId} value={city.cityId}>
                              {city.cityName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='startMonth'>
                          Start
                        </label>
                        <div className='grid grid-cols-2 gap-1 col-span-2'>
                          <select
                            value={formik.values.startMonth}
                            onChange={(e) =>
                              formik.setFieldValue('startMonth', e.target.value)
                            }
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='startMonth'
                            id='startMonth'
                          >
                            <option>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={i.toString()}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            value={formik.values.startYear}
                            onChange={formik.handleChange}
                            className='rounded-lg px-2 py-1 col-span-1'
                            type='text'
                            name='startYear'
                            id='startYear'
                            placeholder='eg. 2012'
                          />
                        </div>
                        <label className='col-span-1 ml-8' htmlFor='endMonth'>
                          Until
                        </label>
                        <div className='grid grid-cols-2 gap-1 col-span-2'>
                          <select
                            value={formik.values.endMonth}
                            onChange={(e) =>
                              formik.setFieldValue('endMonth', e.target.value)
                            }
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='endMonth'
                            id='endMonth'
                          >
                            <option>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={i.toString()}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            value={formik.values.endYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1 col-span-1'
                            type='text'
                            name='endYear'
                            id='endYear'
                            placeholder='eg. 2017'
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='industry'>
                          Industry
                        </label>
                        <input
                          value={formik.values.industry}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='industry'
                          id='industry'
                          placeholder='Industry...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='employmentType'>
                          Employment Type
                        </label>
                        <select
                          value={formik.values.employmentType}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'employmentType',
                              e.target.value
                            )
                          }
                          onBlur={formik.handleBlur}
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='employmentType'
                          id='employmentType'
                        >
                          <option>-- Employment Type ---</option>
                          {empType.map((emp) => (
                            <option key={emp.jotyId} value={emp.jotyName}>
                              {emp.jotyName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='desc'>
                          Description
                        </label>
                        <textarea
                          value={formik.values.desc}
                          onChange={formik.handleChange}
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='desc'
                          id='desc'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='experienceType'>
                          Experience Type
                        </label>
                        <select
                          value={formik.values.experienceType}
                          onChange={(e) =>
                            formik.setFieldValue(
                              'experienceType',
                              e.target.value
                            )
                          }
                          onBlur={formik.handleBlur}
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='experienceType'
                          id='experienceType'
                        >
                          <option value=''>-- Experience Type ---</option>
                          {statusType?.map((status) => (
                            <option key={status.status} value={status.status}>
                              {status.status}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='flex flex-col' id='error-info'>
                        {formik.touched.title && formik.errors.title ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.title}
                          </span>
                        ) : null}
                        {formik.touched.employmentType &&
                        formik.errors.employmentType ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.employmentType}
                          </span>
                        ) : null}
                        {formik.touched.profileHeadline &&
                        formik.errors.profileHeadline ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.profileHeadline}
                          </span>
                        ) : null}
                        {formik.touched.companyName &&
                        formik.errors.companyName ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.companyName}
                          </span>
                        ) : null}
                        {formik.touched.isCurrent && formik.errors.isCurrent ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.isCurrent}
                          </span>
                        ) : null}
                        {formik.touched.startYear && formik.errors.startYear ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.startYear}
                          </span>
                        ) : null}
                        {formik.touched.startMonth &&
                        formik.errors.startMonth ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.startMonth}
                          </span>
                        ) : null}
                        {formik.touched.endYear && formik.errors.endYear ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.endYear}
                          </span>
                        ) : null}
                        {formik.touched.endMonth && formik.errors.endMonth ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.endMonth}
                          </span>
                        ) : null}
                        {formik.touched.industry && formik.errors.industry ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.industry}
                          </span>
                        ) : null}
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.description}
                          </span>
                        ) : null}
                        {formik.touched.city && formik.errors.city ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.city}
                          </span>
                        ) : null}
                        {formik.touched.experienceType &&
                        formik.errors.experienceType ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.experienceType}
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

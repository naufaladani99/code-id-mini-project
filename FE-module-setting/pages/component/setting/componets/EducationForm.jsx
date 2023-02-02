import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  AcademicCapIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  addEducationRequest,
  updateEducationRequest,
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

const degreesType = ['Bachelor', 'Diploma', 'PHD', 'High School'];

export default function EducationForm({ edit }) {
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      educationId: edit ? edit.usduId : '',
      school: edit ? edit.usduSchool : '',
      degree: edit ? edit.usduDegree : '',
      fieldStudy: edit ? edit.usduFieldStudy : '',
      startDate: '',
      endDate: '',
      startYear: edit ? new Date(edit.usduStartDate).getFullYear() : '',
      startMonth: edit ? new Date(edit.usduStartDate).getMonth() : '',
      endYear: edit ? new Date(edit.usduEndDate).getFullYear() : '',
      endMonth: edit ? new Date(edit.usduEndDate).getMonth() : '',
      grade: edit ? edit.usduGrade : '',
      activities: edit ? edit.usduActivities : '',
      desc: edit ? edit.usduDescription : '',
    },
    validationSchema: Yup.object().shape({
      school: Yup.string()
        .min(5, 'Minimal Character is 5')
        .max(255, 'Maximum Character is 255')
        .required('please Provite School name'),
      degree: Yup.string()
        .min(3, 'Minimal Character is 3')
        .max(15, 'Maximum Character is 15')
        .required('Please Choose Degree that we Provided'),
      fieldStudy: Yup.string()
        .min(5, 'Minimal Character is 5')
        .max(125, 'Maximum Character is 125')
        .required('Please Provite field study'),
      startYear: Yup.string().required(
        'please insert start year of your education'
      ),
      endYear: Yup.string().required(
        'please insert end year of your education'
      ),
      startMonth: Yup.string().oneOf(
        oneOfMonth,
        'please choose start month of your education'
      ),
      endMonth: Yup.string().oneOf(
        oneOfMonth,
        'please choose start month of your education'
      ),
      grade: Yup.number().required('please proivete your education Grade'),
      activities: Yup.string().notRequired(),
      desc: Yup.string().notRequired(),
    }),
    onSubmit: (values) => {
      if (edit) {
        values.startDate = new Date(values.startYear, values.startMonth, 1);
        values.endDate = new Date(values.endYear, values.endMonth, 1);
        dispatch(updateEducationRequest(values));
      } else {
        values.startDate = new Date(values.startYear, values.startMonth, 1);
        values.endDate = new Date(values.endYear, values.endMonth, 1);
        dispatch(addEducationRequest(values));
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
            <span>{edit ? '' : 'Add Education'}</span>
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
                <Dialog.Panel className='w-3/5 transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 flex items-center gap-3 mb-3 text-gray-700'
                  >
                    <AcademicCapIcon className='w-6 h-6 inline-block' />
                    Add Education
                  </Dialog.Title>

                  <div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className='flex flex-col gap-3'
                    >
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='school'>
                          School
                        </label>
                        <input
                          value={formik.values.school}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='school'
                          id='school'
                          placeholder='School Name...'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='degree'>
                          Degree
                        </label>
                        <select
                          value={formik.values.degree}
                          onBlur={formik.handleBlur}
                          onChange={(e) =>
                            formik.setFieldValue('degree', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='degree'
                          id='degree'
                        >
                          <option value=''>-- Degrees Options ---</option>
                          {degreesType.map((deg, i) => (
                            <option key={i} value={deg}>
                              {deg}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='fieldStudy'>
                          Field Study
                        </label>
                        <input
                          value={formik.values.fieldStudy}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          type='text'
                          name='fieldStudy'
                          id='fieldStudy'
                          placeholder='eg. Infomatic, Computer Science, Math'
                        />
                      </div>
                      <div className='grid grid-cols-6 items-center'>
                        <label className='col-span-1' htmlFor='grade'>
                          Grade
                        </label>
                        <input
                          value={formik.values.grade}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-1 rounded-lg px-2 py-1'
                          type='number'
                          name='grade'
                          id='grade'
                          placeholder='eg. 3.14'
                        />
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
                            onBlur={formik.handleBlur}
                            className='rounded-lg px-2 py-1 col-span-1'
                            name='startMonth'
                            id='startMonth'
                          >
                            <option value='Bachelor'>-- Month --</option>
                            {months.map((month, i) => (
                              <option key={i} value={i.toString()}>
                                {month}
                              </option>
                            ))}
                          </select>
                          <input
                            value={formik.values.startYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                            <option value='Bachelor'>-- Month --</option>
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
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='activities'>
                          Activities
                        </label>
                        <textarea
                          value={formik.values.activities}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='activities'
                          id='activities'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='grid grid-cols-6'>
                        <label className='col-span-1' htmlFor='desc'>
                          Description
                        </label>
                        <textarea
                          value={formik.values.desc}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='col-span-5 rounded-lg px-2 py-1'
                          name='desc'
                          id='desc'
                          cols='5'
                          rows='5'
                        ></textarea>
                      </div>
                      <div className='flex flex-col space-x-1' id='error-info'>
                        {formik.touched.school && formik.errors.school ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.school}
                          </span>
                        ) : null}
                        {formik.touched.degree && formik.errors.degree ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.degree}
                          </span>
                        ) : null}
                        {formik.touched.fieldStudy &&
                        formik.errors.fieldStudy ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.fieldStudy}
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
                        {formik.touched.grade && formik.errors.grade ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.grade}
                          </span>
                        ) : null}
                        {formik.touched.activities &&
                        formik.errors.activities ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.activities}
                          </span>
                        ) : null}
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <span className='mt-2 text-sm text-red-600'>
                            {formik.errors.description}
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
                            <span>Save</span>
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

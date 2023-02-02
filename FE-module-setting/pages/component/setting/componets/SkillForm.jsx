import {
  PlusIcon,
  SaveIcon,
  ArrowNarrowLeftIcon,
  DesktopComputerIcon,
} from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addSkillRequest } from '../../../redux-saga/Action/profileAction';

export default function SkillForm() {
  let [isOpen, setIsOpen] = useState(false);
  const [changeSkill, setChangeSkill] = useState('');
  const dispatch = useDispatch();
  const id = useSelector((state) => state.profile.profile.userId);
  const skillsType = useSelector((state) => state.profile.skillType);
  const { skills } = useSelector((state) => state.profile);
  const oneOfSkill = skillsType.map((skill) => skill.sktyName);

  const filteredSkills = skillsType.filter(
    (skillType) =>
      !skills.some(
        (skill) => skill.uskiSktyName.sktyName === skillType.sktyName
      )
  );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      userId: id,
      skillName: '',
    },
    validationSchema: Yup.object().shape({
      userId: Yup.number().required(),
      skillName: Yup.string()
        .oneOf(oneOfSkill, 'Please Choose the Skill provided')
        .required('Please Choose Skill'),
    }),

    onSubmit: async (values) => {
      dispatch(addSkillRequest(values));
      closeModal();
      formik.resetForm();
      console.log(values);
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
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Skill</span>
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
                    <DesktopComputerIcon className='w-6 h-6 inline-block' />
                    Add Skill
                  </Dialog.Title>

                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className='items-center grid grid-cols-3  mt-2 gap-3 w-[500px]'>
                        <label className='col-span-1' htmlFor='skillName'>
                          Skills
                        </label>
                        <select
                          value={formik.values.skillName}
                          onBlur={formik.handleBlur}
                          onChange={(e) =>
                            formik.setFieldValue('skillName', e.target.value)
                          }
                          className='rounded-lg px-2 py-1 col-span-2'
                          name='skillName'
                          id='skillName'
                        >
                          <option value='Bachelor'>-- Chosee Skill --</option>
                          {filteredSkills?.map((skill) => (
                            <option key={skill.sktyName} value={skill.sktyName}>
                              {skill.sktyName}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.touched.skillName && formik.errors.skillName ? (
                        <span className='mt-2 text-sm text-red-600'>
                          {formik.errors.skillName}
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

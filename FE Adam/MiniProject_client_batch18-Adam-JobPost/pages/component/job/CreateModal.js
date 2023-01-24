/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { AddJopoRequest } from "../../redux-saga/Action/JopoAction";
import JopoModal from "./components/JopoModal";


export default function Createmodal() {

  const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        jopoNumber: Yup.string('Enter Jopo Number').required('Jopo Number is Required'),
        jopoTitle: Yup.string('Enter Jopo Title').required('Jopo Title is Required'),
        jopoMinSalary: Yup.number('Enter Minimum Salary').required('Minimum Salary is Required'),
        jopoMaxSalary: Yup.number('Enter Max Salary').required('Max Salary is Required'),
        jopoDescription: Yup.object('Enter Jopo Description').required('Jopo Description is Required'),
        jopoResponsibility: Yup.object('Enter Jopo Responsibility').required('Jopo Responsibility is Required'),
        jopoTarget: Yup.object('Enter Jopo Target').required('Jopo Target is Required'),
        jopoBenefit: Yup.object('Enter Jopo Benefit').required('Jopo Benefit is Required'),
        jopoStartDate: Yup.date('Enter Start Date').required('Start Date is Required'),
        jopoEndDate: Yup.date('Enter End Date').required('End Date is Required'),
        jopoEmpEntity: Yup.number('Enter Employee Id').required('Employee Id is Required'),
        jopoClit: Yup.number('Enter Client Id').required('Client Id is Required'),
        jopoJoro: Yup.number('Enter Job Role Id').required('Job Role is Required'),
        jopoJoty: Yup.number('Enter Job Type').required('Job Type is Required'),
        jopoJoca: Yup.number('Enter Job Category').required('Job Category is Required'),
        jopoStatus: Yup.string('Enter Status').required('Status is Required'),
        jopoMinExperience: Yup.number('Enter Min Experience').required('Min Experience is Required'),
        jopoSkill: Yup.string('Enter Skill').required('Skill is Required'),
        jopoMaxExperience: Yup.number('Enter Max Experience').required('Max Experience is Required')
    })
    const formik = useFormik({
        initialValues: {
            jopoNumber: 0,
            jopoTitle: undefined,
            jopoMinSalary: undefined,
            jopoMaxSalary: undefined,
            jopoDescription: {},
            jopoResponsibility: {},
            jopoTarget: {},
            jopoBenefit: {},
            jopoStartDate: undefined,
            jopoEndDate: undefined,
            jopoEmpEntity: 0,
            jopoClit: 0,
            jopoJoro: 0,
            jopoJoty: 0,
            jopoJoca: 0,
            jopoStatus: undefined,
            jopoMinExperience: 0,
            jopoSkill: undefined,
            jopoMaxExperience: 0
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('jopoNumber', values.jopoNumber)
            payload.append('jopoTitle', values.jopoTitle)
            payload.append('jopoMinSalary', values.jopoMinSalary)
            payload.append('jopoMaxSalary', values.jopoMaxSalary)
            payload.append('jopoDescription', values.jopoDescription)
            payload.append('jopoResponsibility', values.jopoResponsibility)
            payload.append('jopoTarget', values.jopoTarget)
            payload.append('jopoBenefit', values.jopoBenefit)
            payload.append('jopoStartDate', values.jopoStartDate)
            payload.append('jopoEndDate', values.jopoEndDate)
            payload.append('jopoEmpEntity', values.jopoEmpEntity)
            payload.append('jopoClit', values.jopoClit)
            payload.append('jopoJoro', values.jopoJoro)
            payload.append('jopoJoty', values.jopoJoty)
            payload.append('jopoJoca', values.jopoJoca)
            payload.append('jopoStatus', values.jopoStatus)
            payload.append('jopoMinExperience', values.jopoMinExperience)
            payload.append('jopoSkill', values.jopoSkill)
            payload.append('jopoMaxExperience', values.jopoMaxExperience)

            dispatch(AddJopoRequest(payload))
            props.closeAdd()
            window.alert('Data Successfully Insert')
            props.onRefresh()
        }
    })

  return (
      <div className='flex items-center justify-between p-2'>
        <JopoModal
          modalTitle={'Create Job Post'}
          buttonTitle={'Posting Job'}
        >
          <form className='grid grid-cols-2 items-center mt-2 gap-3'>
          <label htmlFor='jopoNumber'>Jopo Number</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='jopoNumber'
              id='jopoNumber'
              value={formik.values.jopoNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoNumber"
              onInvalid={formik.validateField}
            />
            
            <label htmlFor='title'>Title</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='title'
              id='title'
              value={formik.values.jopoTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="title"
              onInvalid={formik.validateField}
            />

            <label htmlFor='startDate'>Start Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='startDate'
              id='startDate'
              value={formik.values.jopoStartDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="startDate"
              onInvalid={formik.validateField}
            />

            <label htmlFor='endDate'>End Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='endDate'
              id='endDate'
              value={formik.values.jopoEndDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="endDate"
              onInvalid={formik.validateField}
            />

            <label htmlFor='minSalary'>Min Salary</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='minSalary'
              id='minSalary'
              value={formik.values.jopoMinSalary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="minSalary"
              onInvalid={formik.validateField}
            />

            <label htmlFor='maxSalary'>Max Salary</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='maxSalary'
              id='maxSalary'
              value={formik.values.jopoMaxSalary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="maxSalary"
              onInvalid={formik.validateField}
            />

            <label htmlFor='minExperience'>Min Experience</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='experience'
              id='experience'
              value={formik.values.jopoMinExperience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="minExperience"
              onInvalid={formik.validateField}
            />

            <label htmlFor='maxExperience'>Max Experience</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='experience'
              id='experience'
              value={formik.values.jopoMaxExperience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="maxExperience"
              onInvalid={formik.validateField}
            />

            <label htmlFor='industry'>Industry</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='industry'
              id='industry'
            />

            <label htmlFor='jopoEmpEntity'>Emp Entity ID</label>
            <input
              className='rounded-lg px-2 py-1'
              type='number'
              name='jopoEmpEntity'
              id='jopoEmpEntity'
              value={formik.values.jopoEmpEntity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoEmpEntity"
              onInvalid={formik.validateField}
            />

            <label htmlFor='jopoClit'>Client ID</label>
            <input
              className='rounded-lg px-2 py-1'
              type='number'
              name='jopoClit'
              id='jopoClit'
              value={formik.values.jopoClit}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoClit"
              onInvalid={formik.validateField}
            />

            <label htmlFor='jopoJoro'>Job Role ID</label>
            <input
              className='rounded-lg px-2 py-1'
              type='number'
              name='jopoJoro'
              id='jopoJoro'
              value={formik.values.jopoJoro}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoJoro"
              onInvalid={formik.validateField}
            />

            <label htmlFor='jopoJoty'>Job Type ID</label>
            <input
              className='rounded-lg px-2 py-1'
              type='number'
              name='jopoJoty'
              id='jopoJoty'
              value={formik.values.jopoJoty}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoJoty"
              onInvalid={formik.validateField}
            />

            <label htmlFor='jopoJoca'>Job Category ID</label>
            <input
              className='rounded-lg px-2 py-1'
              type='number'
              name='jopoJoca'
              id='jopoJoca'
              value={formik.values.jopoJoca}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="jopoJoca"
              onInvalid={formik.validateField}
            />

            <label htmlFor='status'>Status</label>
            <div class="form-check form-check-inline">
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
                value={formik.values.jopoStatus = 'published'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="status"
                onInvalid={formik.validateField}
              />
              <label class="form-check-label" for="inlineRadio1">Publish</label>
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
                value={formik.values.jopoStatus = 'unpublished'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="status"
                onInvalid={formik.validateField}
              />
              <label class="form-check-label" for="inlineRadio2">Unpublish</label>
            </div>
          </form>
        </JopoModal>
      </div>
  );
}
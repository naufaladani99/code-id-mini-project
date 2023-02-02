import { AcademicCapIcon, PencilAltIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import EducationForm from './componets/EducationForm';
import Loading from './componets/Loading';
import RemoveModal from './componets/RemoveModal';

export default function EducationSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { educations } = useSelector((state) => state.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'education') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <AcademicCapIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {educations?.length > 1 ? 'Educations' : 'Education'}
          </span>
        </h2>
        <EducationForm />
      </div>
      {educations?.map((education) => (
        <div
          key={education.usduId}
          className='text-sm text-gray-600 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl space-y-2'
        >
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              School
            </span>
            <span className='col-span-4'>: {education.usduSchool}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Degree
            </span>
            <span className='col-span-4'>: {education.usduDegree}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Field Study
            </span>
            <span className='col-span-4'>: {education.usduFieldStudy}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Grade(IPK)
            </span>
            <span className='col-span-4'>: {education.usduGrade}</span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Start-Until
            </span>
            <span className='col-span-4'>
              : {new Date(education.usduStartDate).getUTCFullYear()}-
              {new Date(education.usduStartDate).getUTCMonth()} -{' '}
              {new Date(education.usduEndDate).getFullYear()}-
              {new Date(education.usduEndDate).getMonth()}
            </span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Activity
            </span>
            <span className='col-span-4 text-justify'>
              : {education.usduActivities}
            </span>
          </div>
          <div className='grid grid-cols-5'>
            <span className='col-span-1 font-semibold tracking-tight'>
              Descriptions
            </span>
            <span className='col-span-4 text-justify'>
              : {education.usduDescription}
            </span>
          </div>
          <div className='grid grid-flow-col place-items-end'>
            <div className='flex space-x-3'>
              <EducationForm edit={education} />
              <RemoveModal modalTitle={'education'} id={education.usduId}>
                Are you sure want to delete Education from this{' '}
                <span className='font-semibold'>{education.usduSchool}</span> ?
              </RemoveModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

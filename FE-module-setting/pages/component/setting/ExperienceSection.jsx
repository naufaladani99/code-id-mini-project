import {
  BookOpenIcon,
  PencilAltIcon,
  XIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import ExperienceForm from './componets/ExperienceForm';
import Loading from './componets/Loading';
import RemoveModal from './componets/RemoveModal';

export default function ExperienceSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { experiences } = useSelector((state) => state.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'experience') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <BookOpenIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {experiences?.length > 1 ? 'Experiences' : 'Experience'}
          </span>
        </h2>
        <ExperienceForm />
      </div>
      {experiences?.map((exp) => (
        <div
          key={exp.usexId}
          className=' text-gray-700 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl space-y-2'
        >
          <div className='px-5 flex flex-col space-y-3'>
            <span className='text-gray-800 text-3xl font-bold'>
              {exp.usexTitle}
            </span>
            <span className='text-gray-700 text-xl font-semibold italic'>
              {exp.usexProfileHeadline}
            </span>
            <span className='text-grary-600 text-2xl font-semibold'>
              {exp.usexCompanyName}
            </span>
            <div className='grid grid-cols-5'>
              <span className='text-grary-600 col-span-1 font-semibold tracking-tight'>
                Start-Until
              </span>
              <span className='flex items-center gap-1 text-grary-600 col-span-4'>
                {new Date(exp.usexStartDate).getUTCFullYear()}-
                {new Date(exp.usexStartDate).getUTCMonth()}{' '}
                <ArrowRightIcon className='w-5 h-5' />{' '}
                {new Date(exp.usexEndDate).getFullYear()}-
                {new Date(exp.usexEndDate).getMonth()}
              </span>
            </div>
            <span className='text-grary-600 text-lg tracking-wide'>
              {exp.usexIndustry}
            </span>
            <span className='text-grary-600 text-sm text-justify'>
              {exp.usexDescription}
            </span>
          </div>

          <div className='grid grid-flow-col place-items-end'>
            <div className='flex space-x-3'>
              <ExperienceForm edit={exp} />
              <RemoveModal modalTitle={'experience'} id={exp.usexId}>
                Are you sure want to delete this{' '}
                <span className='font-semibold'>{exp.usexTitle}</span>{' '}
                experience ?
              </RemoveModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

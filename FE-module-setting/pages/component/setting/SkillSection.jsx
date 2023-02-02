import { DesktopComputerIcon, XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import SkillForm from './componets/SkillForm';
import RemoveModal from './componets/RemoveModal';
import Loading from './componets/Loading';

export default function SkillSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { skills } = useSelector((state) => state.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'skill') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <DesktopComputerIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Skills</span>
        </h2>
        <SkillForm />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        {skills?.map((skill) => (
          <div
            key={skill.uskiId}
            className='flex items-center justify-between py-1 px-2 bg-white border border-gray-500/30 rounded-full'
          >
            <span className='ml-3 text-gray-500 font-semibold capitalize'>
              {skill.uskiSktyName.sktyName}
            </span>
            <RemoveModal modalTitle={'skill'} id={skill.uskiId}>
              Are you sure want to delete this{' '}
              <span className='font-semibold'>
                {skill.uskiSktyName.sktyName}
              </span>{' '}
              skill?
            </RemoveModal>
          </div>
        ))}
      </div>
    </div>
  );
}

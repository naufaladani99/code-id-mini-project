import Image from 'next/image';
import { useSelector } from 'react-redux';
import { PencilIcon } from '@heroicons/react/solid';
import SettingSection from './componets/SettingSection';
import SettingModal from './componets/SettingModal';

export default function ProfileSection() {
  const user = useSelector((state) => state.usrStated.UserProfile);

  return (
    <SettingSection sectionTitle={'Profile'}>
      <div className='ml-3 relative mt-2 p-5'>
        <span className='text-gray-700 text-regular font-medium mb-3 block'>
          This informasion will be display, so be careful what you share
        </span>
        <div className='flex items-center'>
          <Image
            className='w-36 h-36 bg-gray-300 object-cover rounded-full flex-shrink-0 border border-black border-opacity-20'
            width={128}
            height={128}
            src='/assets/images/yuri.jpg'
            alt='profile'
          />
          <div className='pl-3'>
            <p className='text-lg font-semibold tracking-tight text-gray-700'>
              {user.email} - {user.username}
            </p>
            <p className='text-md font-regular text-gray-600 tracking-wide'>
              {user.roles}
            </p>
          </div>
        </div>
        <div className='absolute right-0 mr-5 bottom-5'>
          <button type='button'>
            <PencilIcon />
          </button>
        </div>
      </div>
    </SettingSection>
  );
}

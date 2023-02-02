import Image from 'next/image';
import { useSelector } from 'react-redux';
import { UserIcon } from '@heroicons/react/solid';
import ProfileForm from './componets/ProfileForm';
import { useRef } from 'react';
import Loading from './componets/Loading';
import UploadModal from './componets/uploadModal';

// TODO : Upload foto to Firebase ✅
export default function ProfileSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const uploadModalRef = useRef();
  const { username, firstname, lastname, userPhoto } = useSelector(
    (state) => state.profile.profile
  );
  const { defaultEmail } = useSelector((state) => state.profile.profile);
  const { defaultRole } = useSelector((state) => state.profile.profile);

  const handleOpenModalUpload = () => {
    uploadModalRef.current.click();
  };

  if (
    (isLoading.name === 'all' || isLoading.name === 'profile') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <UserIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>Profile</span>
        </h2>
        <ProfileForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <div className='grid grid-cols-5 items-center'>
          <div className='hidden'>
            <UploadModal modalRef={uploadModalRef} />
          </div>
          <button onClick={handleOpenModalUpload}>
            <Image
              className='col-span-1 rounded-full object-cover w-24 h-24 border-4 border-gray-800/10 shadow-sm'
              src={userPhoto ? userPhoto : '/assets/images/dummy-profile.jpg'}
              priority
              width={480}
              height={480}
              sizes='480'
              alt='profile'
            />
          </button>
          <div className='col-span-4 flex flex-col'>
            <span className='font-bold font-mono tracking-tight text-gray-700 text-lg'>
              {firstname} {lastname}{' '}
              <span className='font-medium text-gray-600 text-sm'>
                {username}
              </span>
            </span>
            <span className='italic font-sans text-gray-600 font-semibold'>
              {defaultEmail}
            </span>
            <span className='text-gray-500 font-regular'>{defaultRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

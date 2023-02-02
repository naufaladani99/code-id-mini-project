import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import { getProfileRequest } from '../../redux-saga/Action/profileAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CogIcon } from '@heroicons/react/solid';
import AppLayout from '../../component/layout/AppLayout';
import ProfileSection from '../../component/setting/ProfileSection';
import LoginSection from '../../component/setting/LoginSection';
import EmailSection from '../../component/setting/EmailSection';
import PhoneSection from '../../component/setting/PhoneSection';
import AddressSection from '../../component/setting/AddressSection';
import EducationSection from '../../component/setting/EducationSection';
import ExperienceSection from '../../component/setting/ExperienceSection';
import SkillSection from '../../component/setting/SkillSection';

if (typeof window === 'undefined');

export default function SettingPage() {
  const [position, setPosition] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos) => setPosition(newPos),
      console.error
    );
  }, []);

  useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  return (
    <AppLayout>
      <Head>
        <title>Codeid | Setting</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ToastContainer />
      <div className='antialiased lg:w-4/5 sm:w-5/5  mx-auto px-5 pb-3 flex flex-col gap-3'>
        {/* HEADER SETTING */}
        <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
          <div className='flex flex-col space-y-1'>
            <h2 className='tracking-wide text-gray-700 flex items-center gap-2'>
              <CogIcon className='w-6 h-6 inline-block' />
              <span className='font-bold text-2xl'>Setting</span>
            </h2>
            <h3 className='text-gray-500 text-sm italic'>
              Personal details and application. (This informasion will be
              display, so be careful what you share)
            </h3>
          </div>
        </div>
        {/* Profile */}
        <ProfileSection />
        <LoginSection />
        <EmailSection />
        <PhoneSection />
        <AddressSection />
        <EducationSection />
        <ExperienceSection />
        <SkillSection />
      </div>
    </AppLayout>
  );
}

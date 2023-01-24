import { useRouter } from 'next/router';
import AppLayout from '../../component/layout/AppLayout';
import Breadcrump from '../../component/breadcrump';
import ProfileSection from '../../component/setting/ProfileSection';
import LoginSection from '../../component/setting/LoginSection';
import EmailSection from '../../component/setting/EmailSection';
import PhoneSection from '../../component/setting/PhoneSection';
import AddressSection from '../../component/setting/AddressSection';
import EducationSection from '../../component/setting/EducationSection';
import ExperienceSection from '../../component/setting/ExperienceSection';
import SkillSection from '../../component/setting/SkillSection';

// ** MAKE THIS PAGE JUST HANDLE COMPONENTS
// *TODO : MOVE EVERY SETTINGS SECTION TO INDIVIDUAL COMPONENT ✅
// *TODO : USE FORMIK ON EVERY MODALS ?
// *TODO : SETT UP REDUX & REDUX SAGA

export default function Setting() {
  const router = useRouter();
  return (
    <AppLayout>
      <div className='p-3'>
        <Breadcrump path={router.pathname} />
        <h3 className='font-bold tracking-wide pb-3 text-2xl text-center text-gray-700'>
          Settings
        </h3>
        <div className='px-5 flex flex-col gap-5'>
          {/* PORFILE */}
          <ProfileSection />
          {/* LOGIN */}
          <LoginSection />
          {/* EMAILS */}
          <EmailSection />
          {/* PHONES */}
          <PhoneSection />
          {/* ADDRESS */}
          <AddressSection />
          {/* EDUCATIONS */}
          <EducationSection />
          {/* EXPERIENCES */}
          <ExperienceSection />
          {/* SKILLS */}
          <SkillSection />
        </div>
      </div>
    </AppLayout>
  );
}

// import { PaperClipIcon } from '@heroicons/react/solid';
// import Image from 'next/image';

// export default function SettingPage() {
//   const router = useRouter();

//   return (
//     <AppLayout>
//       <div className='p-3'>
//         <Breadcrump path={router.pathname} />
//       </div>
//       <div className='px-5'>
//         <div className='overflow-hidden bg-white border border-black border-opacity-10 shadow-sm sm:rounded-lg'>
//           <div className='px-4 py-5 sm:px-6'>
//             <h3 className='text-lg font-medium leading-6 text-gray-900'>
//               Settings
//             </h3>
//             <p className='mt-1 max-w-2xl text-sm text-gray-500'>
//               Personal details and application. (This informasion will be
//               display, so be careful what you share)
//             </p>
//           </div>
//           <div className='border-t border-gray-200'>
//             <dl>
//               {/* Profile */}
//               <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>Profile</dt>
//                 <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                   <Image
//                     alt='user-profile'
//                     className='w-20 h-20 bg-gray-300 object-cover rounded-full'
//                     width={128}
//                     height={128}
//                     src='/assets/images/yuri.jpg'
//                   />
//                   <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                     <span className='font-bold block'>Margot Foster</span>
//                     (margotfos@gmail.com) Canidate
//                   </dd>
//                 </div>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='grid grid-cols-2 items-center gap-1'>
//                     <PencilIcon />
//                     <span className='block'> Edit</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Login */}
//               <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>Login</dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   Change Password
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='grid grid-cols-2 items-center gap-1'>
//                     <PencilIcon />
//                     <span className='block'> Edit</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Email */}
//               <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>
//                   Email address
//                 </dt>
//                 <dd className='mt-1 text-sm grid grid-cols-1 text-gray-900 sm:col-span-2 sm:mt-0'>
//                   <span className='inline-block'>
//                     margotfoster@example.com (Default)
//                     <XIcon className='w-5 h-5' />
//                     remove
//                   </span>
//                   margotfoster@example.com
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Email</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Phones */}
//               <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>Phones</dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   082345678900
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Phone</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Address */}
//               <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>Address</dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   Jl Ciburial Indah 5 RT 1/01, Jawa Barat
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Address</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Educations */}
//               <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>
//                   Educations
//                 </dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   S1 - Teknik Informatika - Universitas Dipanegara
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Education</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Experiences */}
//               <div className='relative bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>
//                   Experiences
//                 </dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   Javascript - NodeJs - TailwindCSS - NestJS - NextJS - SQL -
//                   ExpressJs
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Experience</span>
//                   </div>
//                 </button>
//               </div>
//               {/* Skills */}
//               <div className='relative bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
//                 <dt className='text-sm font-medium text-gray-500'>Skills</dt>
//                 <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
//                   Javascript - NodeJs - TailwindCSS - NestJS - NextJS - SQL -
//                   ExpressJs
//                 </dd>
//                 <button className='absolute right-5 bottom-3 text-sm font-bold tracking-tight text-gray-700 px-2 py-1'>
//                   <div className='flex items-center gap-1'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-6 h-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M12 4.5v15m7.5-7.5h-15'
//                       />
//                     </svg>
//                     <span className='block'> Add Skill</span>
//                   </div>
//                 </button>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

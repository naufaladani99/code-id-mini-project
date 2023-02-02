import SettingModal from './SettingModal';
import {
  PhoneIcon,
  PlusIcon,
  PencilAltIcon,
  XIcon,
} from '@heroicons/react/solid';

export default function SettingSection({ title, children }) {
  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <PhoneIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>{title}</span>
        </h2>
        <button className='m-0 px-3 py-1 bg-transparent border-2 rounded-lg text-sm font-bold tracking-tight border-gray-700/75 hover:border-gray-700/25  text-gray-700/75 hover:text-gray-700/25 hover:scale-105 active:scale-90 active:shadow-md duration-300'>
          <div className='flex items-center space-x-1'>
            <PlusIcon className='w-5 h-5 inline-block' />
            <span>Add Phone</span>
          </div>
        </button>
      </div>
      {children}
    </div>
  );
}

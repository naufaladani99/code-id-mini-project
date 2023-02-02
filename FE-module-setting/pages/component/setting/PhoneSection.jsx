import { PhoneIcon, PencilAltIcon, XIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import Loading from './componets/Loading';
import PhoneForm from './componets/PhoneForm';
import RemoveModal from './componets/RemoveModal';

export default function EmailSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { phones } = useSelector((state) => state.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'phone') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <PhoneIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {phones?.length > 1 ? 'Phones' : 'Phone'}
          </span>
        </h2>
        <PhoneForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {phones?.map((phone) => (
            <li
              key={phone?.uspoPhoneId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-sm text-gray-600 font-semibold'>
                {phone?.uspoPhone}
              </span>
              <div className='flex space-x-3'>
                <PhoneForm edit={phone} />
                <RemoveModal modalTitle={'phone'} id={phone?.uspoPhoneId}>
                  Are you sure to delete this phone number{' '}
                  <span className='font-semibold'>{phone?.uspoPhone}</span> ?
                </RemoveModal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

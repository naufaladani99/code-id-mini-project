import { MailIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import EmailForm from './componets/EmailForm';
import Loading from './componets/Loading';
import RemoveModal from './componets/RemoveModal';

export default function EmailSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { emails } = useSelector((state) => state.profile);
  const { defaultEmail } = useSelector((state) => state.profile.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'email') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <MailIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {emails?.length > 1 ? 'Emails' : 'Email'}
          </span>
        </h2>
        <EmailForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {emails?.map((email) => (
            <li
              key={email.pmailId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-sm text-gray-600 font-semibold'>
                {email?.pmailAddress}
                {email?.pmailAddress === defaultEmail ? ' (Default)' : ''}
              </span>
              <div className='flex space-x-3'>
                <EmailForm edit={email} />
                <RemoveModal modalTitle={'email'} id={email.pmailId}>
                  <span>
                    Are you sure want to delete Email{' '}
                    <span className='font-semibold'>{email?.pmailAddress}</span>{' '}
                    ?
                  </span>
                </RemoveModal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

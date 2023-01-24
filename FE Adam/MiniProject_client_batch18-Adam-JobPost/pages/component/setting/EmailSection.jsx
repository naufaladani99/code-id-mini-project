import SettingSection from './componets/SettingSection';
import SettingModal from './componets/SettingModal';

export default function EmailSection() {
  const staticEmails = [
    'kflmattuk@gmail.com',
    'kflmattukz@gmail.com',
    'primeagen04@gmail.com',
  ];

  return (
    <SettingSection sectionTitle={'Emails'} getModals={true}>
      {staticEmails.map((email, i) => {
        return (
          <div className='flex items-center justify-between p-2' key={i}>
            <div className='w-3/5 font-semibold text-gray-700 grid grid-cols-2 items-center'>
              <span>{i === 0 ? 'Your Emails : ' : ''}</span>
              <span className='text-sm'>
                {email} {i === 0 ? ' (Default)' : ''}
              </span>
            </div>

            <SettingModal
              modalTitle={'Remove Email'}
              buttonTitle={'Remove Email'}
            ></SettingModal>
          </div>
        );
      })}
    </SettingSection>
  );
}

import SettingSection from './componets/SettingSection';
import SettingModal from './componets/SettingModal';

export default function PhoneSection() {
  const staticPhones = ['082341717808', '085756608561', '082355590900'];
  return (
    <SettingSection sectionTitle={'Phones'} getModals={true}>
      {staticPhones.map((phone, i) => {
        return (
          <div className='flex items-center justify-between p-2' key={i}>
            <div className='w-3/5 font-semibold text-gray-700 grid grid-cols-2 items-center'>
              <span>{i === 0 ? 'Your Phones : ' : ''}</span>
              <span className='text-sm'>
                {phone} {i === 0 ? ' (Default)' : ''}
              </span>
            </div>

            <SettingModal
              modalTitle={'Remove Phone'}
              buttonTitle={'Remove Phone'}
            ></SettingModal>
          </div>
        );
      })}
    </SettingSection>
  );
}

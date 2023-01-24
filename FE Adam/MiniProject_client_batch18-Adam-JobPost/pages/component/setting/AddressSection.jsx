import SettingSection from './componets/SettingSection';
import SettingModal from './componets/SettingModal';

export default function AddressSection() {
  const staticAddress = [
    '082341717808Jl Ciburial Indah 5 RT 1/01, Jawa Barat',
    'Jl Asiroh RT 007/01, Dki Jakarta',
    'Jl Tmn Cirendeu Permai 13 Kompl Cirendeu Permai, Dki Jakarta',
  ];

  return (
    <SettingSection sectionTitle={'Address'} getModals={true}>
      {staticAddress.map((address, i) => {
        return (
          <div className='flex items-center justify-between p-2' key={i}>
            <div className='w-3/5 font-semibold text-gray-700 grid grid-cols-2 items-center'>
              <span>{i === 0 ? 'Your Address : ' : ''}</span>
              <span className='text-sm'>
                {address} {i === 0 ? ' (Default)' : ''}
              </span>
            </div>

            <SettingModal
              modalTitle={'Remove address'}
              buttonTitle={'Remove address'}
            ></SettingModal>
          </div>
        );
      })}
    </SettingSection>
  );
}

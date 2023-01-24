import SettingSection from './componets/SettingSection';
import SettingModal from './componets/SettingModal';

export default function LoginSection() {
  return (
    <SettingSection sectionTitle={'Login'}>
      <div className='flex items-center justify-between p-2'>
        <p className='font-semibold text-gray-700'>Change Password</p>
        <SettingModal
          modalTitle={'Change Password'}
          buttonTitle={'Edit Password'}
        >
          <form className='grid grid-cols-2 items-center mt-2 gap-3'>
            <label htmlFor='currentPassword'>Current Password</label>
            <input
              className='rounded-lg px-2 py-1'
              type='password'
              name='currentPassword'
              id='currentPassword'
            />

            <label htmlFor='newPassword'>New Password</label>
            <input
              className='rounded-lg px-2 py-1'
              type='password'
              name='newPassword'
              id='newPassword'
            />

            <label htmlFor='reNewPassword'>Re-Type New Password</label>
            <input
              className='rounded-lg px-2 py-1'
              type='password'
              name='reNewPassword'
              id='reNewPassword'
            />
          </form>
        </SettingModal>
      </div>
    </SettingSection>
  );
}

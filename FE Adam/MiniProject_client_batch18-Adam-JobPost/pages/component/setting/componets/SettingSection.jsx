import SettingModal from './SettingModal';
export default function SettingSection({
  getModals = false,
  sectionTitle,
  children,
}) {
  return (
    <div className='border border-black border-opacity-20 rounded-md shadow-sm text-gray-800'>
      <div className='flex items-center justify-between py-1 px-2 text-xl text-gray-600 font-semibold tracking-wider border-b border-gray-300'>
        <h4>{sectionTitle}</h4>
        <div>
          {getModals ? (
            <>
              <SettingModal
                modalTitle={`Add ${sectionTitle}`}
                buttonTitle={`Add ${sectionTitle}`}
              >
                <form className='flex items-center gap-3 mt-3'>
                  <label htmlFor={'new' + sectionTitle}>
                    New {sectionTitle}
                  </label>
                  <input
                    type='email'
                    name={'new' + sectionTitle}
                    id={'new' + sectionTitle}
                  />
                </form>
              </SettingModal>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

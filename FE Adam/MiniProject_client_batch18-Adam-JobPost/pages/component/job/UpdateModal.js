import JopoModal from "./components/JopoModal";

export default function UpdateModal() {
  return (
      <div className='flex items-center justify-between p-2'>
        <JopoModal
          modalTitle={'Edit Job Post'}
          buttonTitle={'Edit'}
        >
          <form className='grid grid-cols-2 items-center mt-2 gap-3'>
            <label htmlFor='title'>Title</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='title'
              id='title'
            />

            <label htmlFor='startDate'>Start Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='startDate'
              id='startDate'
            />

            <label htmlFor='endDate'>End Date</label>
            <input
              className='rounded-lg px-2 py-1'
              type='date'
              name='endDate'
              id='endDate'
            />

            <label htmlFor='salary'>Up to Salary</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='salary'
              id='salary'
            />

            <label htmlFor='experience'>Experience</label>
            <input
              className='rounded-lg px-2 py-1'
              type='text'
              name='experience'
              id='experience'
            />

            <label htmlFor='industry'>Industry</label>
            <input
              className='rounded-lg px-2 py-1'
              type='password'
              name='industry'
              id='industry'
            />

            <label htmlFor='status'>Status</label>
            <div class="form-check form-check-inline">
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
              />
              <label class="form-check-label" for="inlineRadio1">Publish</label>
              <input
                className='form-check-input rounded-lg mx-3 px-2 py-1'
                type='radio'
                name='status'
                id='status'
              />
              <label class="form-check-label" for="inlineRadio1">Unpublish</label>
            </div>
          </form>
        </JopoModal>
      </div>
  );
}
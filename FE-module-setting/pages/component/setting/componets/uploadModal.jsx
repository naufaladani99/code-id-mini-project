import { storage } from '../../../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';
import { uploadPhotoReq } from '../../../redux-saga/Action/profileAction';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function UploadModal({ modalRef }) {
  const dispatch = useDispatch();
  const inputImageRef = useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [upload, setUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  let [isOpen, setIsOpen] = useState(false);
  const id = useSelector((state) => state.profile.profile.userId);
  const currentPhoto = useSelector((state) => state.profile.profile.userPhoto);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleOpenInputImage() {
    inputImageRef.current.click();
  }

  function handleChangeImage(file) {
    if (file.size < 1024 * 1000 * 2) {
      setImageUpload(URL.createObjectURL(file));
      setUpload(file);
    } else {
      alert('image to big', file.size);
    }
  }

  function handleUploadImage() {
    if (imageUpload) {
      const name = upload.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, upload);
      const waitUpload = new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            reject();
            alert(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
              setImageUrl(url);
              resolve();
              dispatch(uploadPhotoReq({ id: id, imageUrl: url }));
            });
          }
        );
      });

      toast.promise(waitUpload, {
        pending: 'Upload Photo Profile',
        success: 'Upload Success',
        error: 'Upload Failed',
      });
    } else {
      alert('File not found');
    }
    closeModal();
  }

  return (
    <>
      <div>
        <button
          type='button'
          ref={modalRef}
          onClick={openModal}
          className='rounded-md bg-slate-700 bg-opacity-75 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          upload Profile
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 mb-3'
                  >
                    Upload Photo Profile
                  </Dialog.Title>

                  <div>
                    <div className='relative rounded-full overflow-hidden w-[300px] h-[300px]'>
                      <Image
                        alt='profile'
                        src={
                          imageUpload
                            ? imageUpload
                            : currentPhoto
                            ? currentPhoto
                            : '/assets/images/dummy-profile.jpg'
                        }
                        height={300}
                        width={300}
                        className='object-cover'
                      />
                      <input
                        hidden
                        type='file'
                        name='file'
                        id='file'
                        ref={inputImageRef}
                        onChange={(file) =>
                          handleChangeImage(file.target.files[0])
                        }
                      />
                      <button
                        onClick={handleOpenInputImage}
                        className='absolute visible bottom-0 pb-12 px-20 right-0 text-center bg-black bg-opacity-25 font-bold tracking-tight text-gray-100 text-md uppercase -mb-2'
                      >
                        Click to Change
                      </button>
                    </div>
                  </div>
                  <div className='mt-20 flex gap-2 justify-end '>
                    <button
                      type='submit'
                      className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                      onClick={handleUploadImage}
                    >
                      Upload
                    </button>
                    <button
                      type='button'
                      className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

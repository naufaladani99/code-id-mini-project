import {
  LocationMarkerIcon,
  PencilAltIcon,
  XIcon,
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import Loading from './componets/Loading';
import AddressForm from './componets/AddressForm';
import RemoveModal from './componets/RemoveModal';

export default function AddressSection() {
  const { isLoading } = useSelector((state) => state.profile);
  const { addresses } = useSelector((state) => state.profile);

  if (
    (isLoading.name === 'all' || isLoading.name === 'address') &&
    isLoading.value
  ) {
    return <Loading />;
  }

  return (
    <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='tracking-tighter text-gray-700 flex items-center gap-3'>
          <LocationMarkerIcon className='w-6 h-6 inline-block' />
          <span className='font-semibold text-lg'>
            {addresses?.length > 1 ? 'Addresses' : 'Address'}
          </span>
        </h2>
        <AddressForm />
      </div>
      <div className='m-3 px-5 py-5 bg-white border border-gray-500/10 rounded-xl'>
        <ol className='divide-y divide-gray-500/50'>
          {addresses?.map((address) => (
            <li
              key={address?.etadAddrId}
              className='flex items-center justify-between py-2'
            >
              <span className='text-sm text-gray-600 font-semibold line-clamp-1'>
                Address : {address?.etadAddr?.addrLine1}{' '}
                {address?.etadAddr?.addrLine2}{' '}
                <span className='text-sm text-gray-500 line-clamp-1'>
                  City : {address?.etadAddr?.addrCity?.cityName}
                </span>
              </span>

              <div className='flex space-x-3'>
                <AddressForm edit={address} />
                <RemoveModal modalTitle={'address'} id={address?.etadAddrId}>
                  Are you sure want to delete address{' '}
                  <span className='font-semibold'>
                    {address?.etadAddr?.addrLine1}{' '}
                    {address?.etadAddr?.addrLine2}
                  </span>{' '}
                </RemoveModal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

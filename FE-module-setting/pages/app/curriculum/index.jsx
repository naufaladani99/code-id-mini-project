import {
  AcademicCapIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../../component/layout/AppLayout';
import ButtonMenu from '../../component/curriculum/ButtonMenu';
import ListBox from '../../component/curriculum/ListBox';
import Pagination from '../../component/curriculum/pagination';
import { useEffect, useState, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurriculumsReq } from '../../redux-saga/Action/curriculumAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export default function Curriculum() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState({ id: 0, status: 'all' });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState({ id: 0, status: 'all' });

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.curriculum);
  const curriculums = useSelector((state) => state.curriculum.curriculums);
  useEffect(() => {
    dispatch(getCurriculumsReq());
  }, [dispatch]);

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchKeyword(keyword);
    setStatusFilter(status);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEnter = (e) => {
    if (Number(e.keyCode) === 13) {
      handleSearch();
    }
  };

  const filteredCuriculum = useMemo(
    () =>
      statusFilter.status === 'all'
        ? searchKeyword.length > 0
          ? curriculums.filter(
              (curriculum) =>
                curriculum.name
                  .toLowerCase()
                  .includes(searchKeyword.toLowerCase()) ||
                curriculum.title
                  .toLowerCase()
                  .includes(searchKeyword.toLowerCase())
            )
          : curriculums
        : curriculums
            .filter(
              (curriculum) => curriculum.learnType === statusFilter.status
            )
            .filter(
              (curriculum) =>
                curriculum.name
                  .toLowerCase()
                  .includes(searchKeyword.toLowerCase()) ||
                curriculum.title
                  .toLowerCase()
                  .includes(searchKeyword.toLowerCase())
            ),
    [searchKeyword, statusFilter, curriculums]
  );

  const paginateCurriculum = paginate(filteredCuriculum, currentPage, pageSize);

  return (
    <AppLayout>
      <Head>
        <title>Codeid | Curriculum</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ToastContainer />
      <div className='sm:w-5/5 mt-2 mx-auto px-5 pb-3 flex flex-col gap-5'>
        <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-xl shadow-sm'>
          <div className='flex justify-between items-center'>
            <h2 className='tracking-tight text-gray-700 flex items-center gap-2'>
              <AcademicCapIcon className='w-6 h-6 inline-block' />
              <span className='font-bold text-2xl'>Curriculum</span>
            </h2>
            <Link
              href='/app/curriculum/new'
              className='px-4 py-2 font-bold tracking-tight text-gray-500 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            >
              <div className='flex items-center space-x-1'>
                <PlusIcon className='w-5 h-5 inline-block' />
                <span>Create Curriculum</span>
              </div>
            </Link>
          </div>
        </div>

        <div className='px-5 py-3 bg-white border border-gray-500/15 rounded-lg shadow-sm'>
          <div className='grid grid-cols-5 justify-around items-center space-x-2'>
            <span className='col-span-1 font-semibold text-sm text-gray-700'>
              Search by category
            </span>
            <div className='col-span-4 space-x-2'>
              <div className='grid grid-cols-5 space-x-2'>
                <div className='col-span-3 relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <SearchIcon className='w-5 h-5 text-gray-500' />
                  </div>
                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => handleEnter(e)}
                    type='search'
                    id='default-search'
                    autoComplete='off'
                    className='block w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300'
                    placeholder='Search Title, Headline'
                  />
                </div>
                <ListBox changeStatus={setStatus} />
                <button
                  onClick={handleSearch}
                  className='font-bold tracking-tight text-gray-500 text-xs px-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-gray-300 relative shadow-md sm:rounded-lg'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-gray-600 bg-gray-100 text-sm font-semibold tracking-wide uppercase'>
                <th className='p-2'>No.</th>
                <th className='p-2'>Title</th>
                <th className='p-2'>Headline</th>
                <th className='p-2'>Duration</th>
                <th className='p-2'>Total</th>
                <th className='p-2'>Type</th>
                <th className='p-2'>Rating</th>
                <th className='p-2'></th>
              </tr>
            </thead>
            <tbody className='p-2 divide-y font-medium'>
              {!isLoading
                ? paginateCurriculum?.map((curriculum, i) => (
                    <tr
                      key={curriculum?.id}
                      className='divide-x text-sm text-gray-500'
                    >
                      <td className='py-1 px-5'>
                        <div className='text-center'>
                          {currentPage > 1
                            ? i === 9
                              ? currentPage * (i + 1)
                              : `${currentPage - 1}${i + 1}`
                            : i + 1}
                        </div>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='line-clamp-2' title={curriculum?.name}>
                          {curriculum?.name}
                        </div>
                      </td>
                      <td className='py-1 px-5' title={curriculum?.title}>
                        <div className='line-clamp-2'>{curriculum?.title}</div>
                      </td>
                      <td className='py-1 px-5 text-center'>
                        {/* //TODO Not Actual Duration */}
                        <span>{curriculum.duration}</span>
                      </td>
                      <td className='py-1 px-5 flex flex-col h-auto my-auto'>
                        <span>
                          members:{' '}
                          <span className='italic text-xs'>
                            {curriculum?.total?.members}
                          </span>
                        </span>
                        <span>
                          batchs:{' '}
                          <span className='italic text-xs'>
                            {/* {curriculum.total.batchs
                              ? curriculum.total.batchs
                              : 0} */}
                            {/* //!: Not Actual total batchs */}
                            {Math.ceil(curriculum?.total?.members / 10)}
                          </span>
                        </span>
                      </td>
                      <td className='py-1 px-5 text-center'>
                        <span>{curriculum?.type}</span>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='flex place-content-center'>
                          {Array(5)
                            .fill(curriculum?.rating)
                            .map((rate, i) => (
                              <StarIcon
                                key={i}
                                className={`w-5 h-5 ${
                                  rate - i > 0
                                    ? 'text-yellow-500'
                                    : 'text-gray-400'
                                } inline`}
                              />
                            ))}
                        </div>
                      </td>
                      <td className='py-1 px-5'>
                        <div className='flex place-content-center'>
                          <ButtonMenu curriculum={curriculum} />
                        </div>
                      </td>
                    </tr>
                  ))
                : ''}
            </tbody>
          </table>
          {isLoading ? (
            <>
              <p className='p-3 text-gray-500 text-center text-sm font-semibold'>
                Loading...
              </p>
            </>
          ) : (
            ''
          )}
          {filteredCuriculum.length === 0 && searchKeyword !== '' && (
            <h2 className='p-3 text-gray-500 text-center text-sm font-semibold'>
              Sorry, Not found any data for keyword {searchKeyword} ... use
              another keyword
            </h2>
          )}
        </div>
      </div>
      <Pagination
        items={filteredCuriculum.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </AppLayout>
  );
}

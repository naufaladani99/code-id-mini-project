import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { doPushSignoutRequest } from '../../redux-saga/Action/UsrAction';
import {
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
  SelectorIcon,
  ClipboardListIcon,
  CollectionIcon,
  CreditCardIcon,
  ViewGridAddIcon,
  CashIcon,
  CogIcon,
  PhoneOutgoingIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
} from '@heroicons/react/outline';

import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SearchIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrump from '../breadcrump';

export default function AppLayout(props) {
  const router = useRouter();

  const navigation = [
    {
      name: 'Home',
      href: '/app',
      icon: HomeIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] === 'app'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Sales', 'Instructor'],
    },
    {
      name: 'Candidat',
      href: '/app/candidat',
      icon: AcademicCapIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'candidat'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Instructor'],
    },
    {
      name: 'Batch',
      href: '/app/batch',
      icon: ViewGridAddIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'batch'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Instructor'],
    },
    {
      name: 'Talent',
      href: '/app/talent',
      icon: UserGroupIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'talent'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Instructor', 'Sales'],
    },
    {
      name: 'Placement',
      href: '/app/placement',
      icon: UserGroupIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'placement'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Sales'],
    },
    {
      name: 'Curriculum',
      href: '/app/curriculum',
      icon: BookOpenIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'curriculum'
          ? true
          : false,
      roles: ['Administrator', 'Instructor'],
    },
    {
      name: 'Hiring',
      href: '/app/hiring',
      icon: PhoneOutgoingIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'hiring'
          ? true
          : false,
      roles: ['Administrator', 'Recuirter', 'Sales'],
    },
    {
      name: 'Setting',
      href: '/app/setting',
      icon: CogIcon,
      current:
        router.asPath.split('/')[router.asPath.split('/').length - 1] ===
        'setting'
          ? true
          : false,
      roles: [
        'Administrator',
        'Recuirter',
        'Sales',
        'Instructor',
        'Candidat',
        'Talent',
        'Outsource',
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { children } = props;

  const dispatch = useDispatch();
  const { UserProfile } = useSelector((state) => state.usrStated);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(UserProfile);
  }, [UserProfile]);
  // console.log(UserProfile);
  // console.log(user);

  if (!user) {
    router.push('/signin');
    return <div>Please Login </div>;
  }

  const onLogout = () => {
    dispatch(doPushSignoutRequest());
    router.push('/');
  };

  return (
    <div className='h-screen flex overflow-hidden bg-white'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 flex z-40 lg:hidden'
          open={sidebarOpen}
          onClose={() => setSidebarOpen(!sidebarOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterhref='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leavehref='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterhref='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leavehref='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterhref='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leavehref='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <Image
                  className='h-10 w-auto'
                  height={120}
                  width={120}
                  src='/assets/images/codeid.png'
                  alt='codeid'
                  priority
                />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2'>
                  <div className='space-y-1'>
                    {navigation
                      .filter((item) =>
                        item.roles.includes(user?.roles || UserProfile?.roles)
                      )
                      .map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                            'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100'>
          <div className='flex items-center flex-shrink-0 px-6'>
            <Link href='/'>
              <Image
                className='h-10 w-auto'
                width={128}
                height={128}
                src='/assets/images/codeid.png'
                alt='codeid'
                priority
              />
            </Link>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='h-0 flex-1 flex flex-col overflow-y-auto'>
            {/* User account dropdown */}
            <Menu
              as='div'
              className='px-3 mt-6 relative inline-block text-left'
            >
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'>
                      <span className='flex w-full justify-between items-center'>
                        <span className='flex min-w-0 items-center justify-between space-x-3'>
                          <Image
                            className='w-10 h-10 bg-gray-300 object-cover rounded-full flex-shrink-0'
                            height={128}
                            width={128}
                            src={
                              user?.userPhoto
                                ? user?.userPhoto
                                : UserProfile?.userPhoto
                                ? UserProfile?.userPhoto
                                : '/assets/images/dummy-profile.jpg'
                            }
                            alt='profile'
                          />
                          <span className='flex-1 flex flex-col min-w-0'>
                            <span className='text-gray-900 text-sm font-medium truncate'>
                              {user?.username || UserProfile?.username}
                            </span>
                            <span className='text-gray-500 text-sm truncate'>
                              {user?.email || UserProfile?.email}
                            </span>
                          </span>
                        </span>
                        <SelectorIcon
                          className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                          aria-hidden='true'
                        />
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterhref='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leavehref='transform opacity-0 scale-95'
                  >
                    <Menu.Items
                      static
                      className='z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
                    >
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              View profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='/app/setting'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Notifications
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Get desktop app
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='/'
                              onClick={onLogout}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

            {/* Navigation */}
            <nav className='px-3 mt-6'>
              <div className='space-y-1'>
                {navigation
                  .filter((item) =>
                    item.roles.includes(user?.roles || UserProfile?.roles)
                  )
                  .map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-200 text-gray-900'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        {/* Search header */}
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
          <button
            className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 flex justify-between px-4 sm:px-6 lg:px-8'>
            <div className='flex-1 flex'>
              <form className='w-full flex md:ml-0' action='#' method='GET'>
                <label htmlFor='search_field' className='sr-only'>
                  Search
                </label>
                <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5' aria-hidden='true' />
                  </div>
                  <input
                    id='search_field'
                    name='search_field'
                    className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </form>
            </div>
            <div className='flex items-center'>
              {/* Profile dropdown */}
              <Menu as='div' className='ml-3 relative'>
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          className='w-10 h-auto bg-gray-300 object-cover rounded-full flex-shrink-0'
                          height={10}
                          width={10}
                          src='/assets/images/dummy-profile.jpg'
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterhref='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leavehref='transform opacity-0 scale-95'
                    >
                      <Menu.Items
                        static
                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
                      >
                        <div className='py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                View profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Notifications
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Get desktop app
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Support
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                onClick={onLogout}
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Logout
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
          {/* Page title & actions */}
          <div className='py-3 px-5'>
            <Breadcrump />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
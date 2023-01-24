/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import MinimalMenu from "./MinimalMenu";
import { Switch } from "antd";
import JopoApi from "../../api/JopoApi";
import { GetJopoRequest, DelJopoRequest } from "../../redux-saga/Action/JopoAction";
import Pagination from "./buttonPagination";
import _ from "lodash";
import { Menu, Transition } from '@headlessui/react'
import { HiDotsVertical } from 'react-icons/hi'
import UpdateModal from './UpdateModal'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function JobPost({keyword, searchTerm, setViewKeyword, status}) {

    const dispatch = useDispatch();
    const jopos = useSelector((state) => state.jopoStated.jopos);
    const [jopo, setJopo] = useState()
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const getJopo = async () => {
    const result = await JopoApi.getAll();
    console.log(result.data);
    setJopo(result.data);
    return result.data;
  }

  const removeAction = async (id) => {
    dispatch(DelJopoRequest(id));
  }

  const filteredJopos = useMemo(() => {
    if (searchTerm.length > 0) {
      setViewKeyword(searchTerm);
      return jopos.filter((jp) => {
        return jp.jopoTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        jp.jopoJoca.jocaName.toLowerCase().includes(searchTerm.toLowerCase())
      });
    }
    return jopos;
  }, [searchTerm, jopos]);

  console.log({keyword, searchTerm, status});

  useEffect(() => {
    dispatch(GetJopoRequest());
    console.log(jopos);
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };

  const paginateJopo = paginate(filteredJopos, currentPage, pageSize);


    return (
        <div className="overflow-x-auto">
            <div className="border rounded-md pb-24">
                <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        TITLE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        START END DATE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        UP TO SALARY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        EXPERIENCE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        INDUSTRY
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        PUBLISH
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 -z-10">
                                {
                                   Array.isArray(paginateJopo) && (paginateJopo).map(job => (
                                <tr key={job.jopoId}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {job.jopoTitle}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>{new Date(job.jopoStartDate).toDateString()}</span> <br/>
                                        <span>{new Date(job.jopoEndDate).toDateString()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <span>Rp. {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(job.jopoMinSalary)} - </span> <br/> 
                                        Rp. {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(job.jopoMaxSalary)}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-sm text-gray-800 whitespace-nowrap">
                                        {job.jopoMinExperience} tahun
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                                        {job.jopoJoca.jocaName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                                        <Switch defaultChecked={job.jopoStatus=='published'} onClick = { async(tes) => {
                                            let result;
                                            if (tes) {
                                                 result = await JopoApi.publish(job.jopoId);
                                            }
                                            else {
                                                 result = await JopoApi.unPublish(job.jopoId);
                                            }
                                                if(result) {
                                                    return result.data
                                                }
                                                    return result.data
                                            console.log('xxx')
                                        }}/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {/* <MinimalMenu id={job.jopoId}/> */}
                                    <Menu as="div" className="ml-2 relative inline-block text-left">
                                    <div>
                                    <Menu.Button className="ml-2 text-black focus:ring-4 focus:ring-green-300 font-medium text-sm px-4 py-1 text-center inline-flex items-center">
                                    <HiDotsVertical className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                    </div>

                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="absolute right-0 z-40 mt-2 mb w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <UpdateModal className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                        )}/>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                    <a
                                    onClick={() => removeAction(job.jopoId)}
                                    className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'rounded-md bg-blue-700 bg-opacity-75 px-4 py-2 text-sm font-medium text-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                                    )}
                                    >
                                    Delete
                                    </a>
                                    )}
                                    </Menu.Item>
                                    </div>
                                    </Menu.Items>
                                    </Transition>
                                    </Menu>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
            <div className="w-2/5 mx-auto overflow-visible">
                <Pagination
                items={filteredJopos?.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
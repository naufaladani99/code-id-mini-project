import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetJopoRequest, DelJopoRequest } from '../../../redux-saga/Action/JopoAction'
import FormikAddJopoApi from './FormikAddJopoApi'
import FormikEditJopoApi from './FormikEditJopoApi'
import Header from '../../layout/Header'

export default function FormikJopoViewApi() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const { jopos } = useSelector(state => state.jopoStated)
  useEffect(() => {
    dispatch(GetJopoRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelJopoRequest(id))
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {
        displayEdit ?
          <FormikEditJopoApi
            id={id}
            setDisplay={setDisplayEdit}
            closeAdd={() => setDisplayEdit(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          display ?
            <FormikAddJopoApi
              setDisplay={setDisplay}
              closeAdd={() => setDisplay(false)}
              onRefresh={() => setRefresh(true)}
            />
            :
            <>
            <Header name={'Job Post'} setDisplay={setDisplay}/>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">Region ID</th>
                    <th scope="col" className="px-6 py-3">Region Name</th>
                    <th scope="col" className="px-6 py-3">Region File</th>
                    <th scope="col" className="px-6 py-3">Region Foto</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="overscroll-auto md:overscroll-contain">
                  {
                    jopos && jopos.map(job => (
                      <tr key={job.jopoId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{job.jopoId}</td>
                        <td className="px-6 py-2">{job.jopoTitle}</td>
                        <td className="px-6 py-2">{reg.regionFile}</td>
                        <td className="px-6 py-2">{reg.regionPhoto}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
      }
    </div>
  )
}

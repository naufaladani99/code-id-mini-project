import { useRouter } from "next/router";
import Breadcrump from "../../component/breadcrump";
import AppLayout from "../../component/layout/AppLayout";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  AddTaapApplyRequest,
  AddTaapRequest,
  GetTaapUserRequest,
} from "../../redux-saga/Action/TaapAction";
import { GetJopoRequest } from "../../redux-saga/Action/JopoAction";

export default function Talent() {
  const router = useRouter();

  const dispatch = useDispatch();
  // const [previewImg, setPreviewImg] = useState()
  // const [preViewFile, setPreviewFile] = useState()
  // const [uploaded, setUploaded] = useState(false)
  // const [uploadedFile, setUploadedFile] = useState(false)
  const validationSchema = Yup.object().shape({
    taapIntro: Yup.string("Enter Intro"),
    taapScoring: Yup.number("Enter Scoring"),
    taapStatus: Yup.string("Enter Status").required("Status is Required"),
    taapEntity: Yup.number("Enter taapEntity").required("taapEntity is Required"),
    taapJopo: Yup.number("Enter jopoId").required("jopo is Required")
  });
  const formik = useFormik({
    initialValues: {
      taapIntro: "",
      taapScoring: 0,
      taapStatus: "",
      taapEntity: "",
      taapJopo: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(AddTaapRequest(values));
      window.alert("Data Successfully Insert");
    },
  });
  // const uploadOnChange = name => event => {
  //     let reader = new FileReader()
  //     const file = event.target.files[0]
  //     console.log(event.target.files);
  //     reader.onload = () => {
  //         formik.setFieldValue('foto', file)
  //         setPreviewImg(reader.result)
  //     }
  //     reader.readAsDataURL(file)
  //     setUploaded(true)
  // }
  // const uploadFileOnChange = name => e => {
  //     let reader = new FileReader()
  //     const files = e.target.files[0]
  //     console.log(e.target.files);
  //     reader.onload = () => {
  //         formik.setFieldValue('file', files)
  //         setPreviewFile(reader.result)
  //     }
  //     reader.readAsDataURL(files)
  //     setUploadedFile(true)
  // }
  // const onClearImage = event => {
  //     event.preventDefault()
  //     setUploaded(false)
  //     setPreviewImg(null)
  // }
  // const onClearFile = e => {
  //     e.preventDefault()
  //     setUploadedFile(false)
  //     setPreviewFile(null)
  // }

  const users = useSelector((state) => state.taapStated.user);
  const jobPost = useSelector((state) => state.jopoStated.jopos);
  useEffect(() => {
    dispatch(GetTaapUserRequest()), dispatch(GetJopoRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(users);
  const userPendidikan = users.filter(
    (user) => user.userEntityId === formik.values.userEntityId
  );
  console.log(userPendidikan);

  const degreesType = ["Bachelor", "Diploma", "PHD", "High School"];
  const statusType = ["Apply Application","Interview", "Contract", "Legal Placement"]

  console.log(formik.errors);

  return (
    <AppLayout>
      <div>
        <Breadcrump path={router.pathname} />
        <div className="text-center mt-14">
          <h2 className="text-2xl tracking-tight">
            Professional Application Process
          </h2>
        </div>
        <div className="flex justify-center my-2 mx-4 md:mx-0">
          <form onSubmit={formik.handleSubmit} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <select
                  className="w-full border rounded-md"
                  name="taapEntity"
                  onChange={(e) =>
                    formik.setFieldValue("taapEntity", e.target.value)
                  }
                >
                  <option disabled>Full Name</option>
                  {users.map((user) => (
                    <option key={user.userEntityId} value={user.userEntityId}>
                      {user.userFirstName} {user.userLastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <select
                  className="w-full border rounded-md"
                  name="taapJopo"
                  onChange={(e) =>
                    formik.setFieldValue("taapJopo", e.target.value)
                  }
                >
                  <option disabled>Full Name</option>
                  {Array.isArray(jobPost) && jobPost.map((jopo) => (
                    <option key={jopo.jopoId} value={jopo.jopoId}>
                      {jopo.jopoTitle}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <input
                  id="taapIntro"
                  name="taapIntro"
                  type="text"
                  value={formik.values.taapIntro}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onInvalid={formik.validateField}
                  autoComplete="off"
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  placeholder="Describe Yourself"
                  required
                />
                {formik.touched.taapIntro && formik.errors.taapIntro ? (
                  <span className="mt-2 text-sm text-red-600">
                    {formik.errors.taapIntro}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <select className="w-full border rounded-md">
                  <option disabled>Job</option>
                  {degreesType.map((pendidikan) => (
                    <option key={pendidikan} value={pendidikan}>
                      {pendidikan}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <select className="w-full border rounded-md" name="taapStatus" onChange={(e) => formik.setFieldValue("taapStatus", e.target.value)}>
                  <option disabled>Status</option>
                  {statusType.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <input
                  id="taapScoring"
                  name="taapScoring"
                  type="text"
                  value={formik.values.taapScoring}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onInvalid={formik.validateField}
                  autoComplete="off"
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  placeholder="taapScoring"
                />
                {formik.touched.taapScoring && formik.errors.taapScoring ? (
                  <span className="mt-2 text-sm text-red-600">
                    {formik.errors.taapScoring}
                  </span>
                ) : null}
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <input
                  id="resume"
                  name="Resume"
                  type="file"
                  value={formik.values.usmeFilename}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onInvalid={formik.validateField}
                  autoComplete="Resume"
                  className="appearance-none overflow-hidden block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  placeholder="resume"
                  accept=".pdf"
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <button
                  type="submit"
                  className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}

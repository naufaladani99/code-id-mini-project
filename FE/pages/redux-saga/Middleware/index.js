import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from "../Constants/UsrConstant";
import * as ActionTypeJobType from "../Constants/JobTypeConstant";
import * as ActionTypeJobCategory from "../Constants/JobCategoryConstant";
import * as ActionTypeJobPost from "../Constants/JobPostConstant";
import * as ActionTypeClient from "../Constants/ClientConstant";
import { handleUsrSignin, handleUsrSignout, handleUsrSignup } from "./UsrMidle";
import {
  handleGetJobType,
  handleGetOneJobType,
} from "./JobTypeMiddle";
import {
  handleGetJobCategory,
  handleGetOneJobCategory,
} from "./JobCategoryMiddle";
import {
  handleGetJobPost,
  handleGetOneJobPost,
} from "./JobPostMiddle";
import { handleGetClient, handleGetOneClient } from "./ClientMiddle"
function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeEvery(ActionTypeJobType.GET_JOBTYPE_REQUEST, handleGetJobType),
    takeEvery(ActionTypeJobType.GETONE_JOBTYPE_REQUEST, handleGetOneJobType),
    takeEvery(
      ActionTypeJobCategory.GET_JOBCATEGORY_REQUEST,
      handleGetJobCategory
    ),
    takeEvery(
      ActionTypeJobCategory.GETONE_JOBCATEGORY_REQUEST,
      handleGetOneJobCategory
    ),
    takeEvery(ActionTypeJobPost.GET_JOBPOST_REQUEST, handleGetJobPost),
    takeEvery(ActionTypeJobPost.GETONE_JOBPOST_REQUEST, handleGetOneJobPost),
    takeEvery(ActionTypeClient.GET_CLIENT_REQUEST, handleGetClient),
    takeEvery(ActionTypeClient.GETONE_CLIENT_REQUEST, handleGetOneClient),
  ]);
}

export default watchAll;

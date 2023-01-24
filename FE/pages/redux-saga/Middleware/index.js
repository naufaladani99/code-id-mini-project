import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from "../Constants/UsrConstant";
import { handleUsrSignin, handleUsrSignout, handleUsrSignup } from "./UsrMidle";
import * as ActionTypeBootcamp from "../Constants/BootcampConstant";
import { listBootcamp, listBootcampId, listReview } from "./BootcampMidle";
import * as ActionTypeUsers from "../Constants/UsersConstant";
import { listUsers, listUsersAll } from "./UsersMidle";
function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST, listBootcamp),
    takeEvery(ActionTypeBootcamp.GET_ID_BOOTCAMP_REQUEST, listBootcampId),
    takeEvery(ActionTypeBootcamp.GET_REVIEW_REQUEST, listReview),
    takeEvery(ActionTypeUsers.GET_ID_USERS_REQUEST, listUsers),
    takeEvery(ActionTypeUsers.GET_ALL_USERS_REQUEST, listUsersAll),
  ]);
}

export default watchAll;

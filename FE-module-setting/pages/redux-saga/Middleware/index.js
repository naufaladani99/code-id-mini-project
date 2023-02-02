import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as ActionTypeUsr from '../Constants/UsrConstant';
import { actionTypesCurriculum } from '../Constants/curriculumType';
import { actionTypesProfile } from '../Constants/profileType';
import { handleUsrSignin, handleUsrSignout, handleUsrSignup } from './UsrMidle';
import {
  handleGetProfile,
  handlerAddEmail,
  handlerAddPhone,
  handlerAddAddress,
  handlerAddEducation,
  handlerAddExperience,
  handlerAddSkill,
  handlerRemoveEmail,
  handlerRemovePhone,
  handlerRemoveAddress,
  handlerRemoveEducation,
  handlerRemoveExperience,
  handlerRemoveSkill,
  handleUpdateProfile,
  handlerUpdatePassword,
  handlerUpdateEmail,
  handlerUpdatePhone,
  handlerUpdateAddress,
  handlerUpdateEducation,
  handlerUpdateExperience,
  handlerUploadPhoto,
} from './profileMiddleware';
import {
  handlerGetCurriculum,
  handlerRemoveCurriculum,
} from './curriculumMiddleware';

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeLatest(actionTypesProfile.GET_PROFILE_REQUEST, handleGetProfile),
    takeLatest(actionTypesProfile.UPD_PROFILE_REQUEST, handleUpdateProfile),
    takeLatest(actionTypesProfile.UPD_PASSWORD_REQUEST, handlerUpdatePassword),
    takeLatest(actionTypesProfile.ADD_EMAIL_REQUEST, handlerAddEmail),
    takeLatest(actionTypesProfile.REM_EMAIL_REQUEST, handlerRemoveEmail),
    takeLatest(actionTypesProfile.UPD_EMAIL_REQUEST, handlerUpdateEmail),
    takeLatest(actionTypesProfile.ADD_PHONE_REQUEST, handlerAddPhone),
    takeLatest(actionTypesProfile.REM_PHONE_REQUEST, handlerRemovePhone),
    takeLatest(actionTypesProfile.UPD_PHONE_REQUEST, handlerUpdatePhone),
    takeLatest(actionTypesProfile.ADD_ADDRESS_REQUEST, handlerAddAddress),
    takeLatest(actionTypesProfile.REM_ADDRESS_REQUEST, handlerRemoveAddress),
    takeLatest(actionTypesProfile.UPD_ADDRESS_REQUEST, handlerUpdateAddress),
    takeLatest(actionTypesProfile.ADD_EDUCATION_REQUEST, handlerAddEducation),
    takeLatest(
      actionTypesProfile.REM_EDUCATION_REQUEST,
      handlerRemoveEducation
    ),
    takeLatest(
      actionTypesProfile.UPD_EDUCATION_REQUEST,
      handlerUpdateEducation
    ),
    takeLatest(actionTypesProfile.ADD_EXPERIENCE_REQUEST, handlerAddExperience),
    takeLatest(
      actionTypesProfile.REM_EXPERIENCE_REQUEST,
      handlerRemoveExperience
    ),
    takeLatest(
      actionTypesProfile.UPD_EXPERIENCE_REQUEST,
      handlerUpdateExperience
    ),
    takeLatest(actionTypesProfile.ADD_SKILL_REQUEST, handlerAddSkill),
    takeLatest(actionTypesProfile.REM_SKILL_REQUEST, handlerRemoveSkill),
    takeLatest(
      actionTypesCurriculum.GET_CURRICULUMS_REQEUST,
      handlerGetCurriculum
    ),
    takeLatest(actionTypesProfile.UPD_PHOTO_PROFILE_REQ, handlerUploadPhoto),
    takeLatest(
      actionTypesCurriculum.REM_CURRICULUM_REQEUST,
      handlerRemoveCurriculum
    ),
  ]);
}

export default watchAll;

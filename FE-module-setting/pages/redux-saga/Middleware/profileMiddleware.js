import { call, put } from 'redux-saga/effects';
import {
  getProfile,
  updateProfile,
  updatePassword,
  uploadPhoto,
} from '../../api/UserApi';
import {
  getProfileSuccess,
  getProfileFailed,
  updateProfileSuccess,
  updateProfileFailed,
  updatePasswordSuccess,
  updatePasswordFailed,
  updateEmailSuccess,
  updateEmailFailed,
  updatePhoneSuccess,
  updatePhoneFailed,
  updateAddressSuccess,
  updateAddressFailed,
  updateEducationSuccess,
  updateEducationFailed,
  updateExperienceSuccess,
  updateExperienceFailed,
  addEmailSuccess,
  addEmailFailed,
  addPhoneSuccess,
  addPhoneFailed,
  addAddressSuccess,
  addAddressFailed,
  addEducationSuccess,
  addEducationFailed,
  addExperienceSuccess,
  addExperienceFailed,
  addSkillSuccess,
  addSkillFailed,
  removeEmailSuccess,
  removeEmailFailed,
  removePhoneSuccess,
  removePhoneFailed,
  removeAddressSuccess,
  removeAddressFailed,
  removeEducationSuccess,
  removeEducationFailed,
  removeExperienceSuccess,
  removeExperienceFailed,
  removeSkillSuccess,
  removeSkillFailed,
  uploadPhotoSuc,
  uploadPhotoFal,
} from '../Action/profileAction';

import {
  requestAddAddress,
  requestAddEducation,
  requestAddEmail,
  requestAddExperience,
  requestAddPhone,
  requestAddSkill,
  requestRemoveAddress,
  requestRemoveEducation,
  requestRemoveEmail,
  requestRemoveExperience,
  requestRemovePhone,
  requestRemoveSkill,
  requestUpdateAddress,
  requestUpdateEducation,
  requestUpdateEmail,
  requestUpdateExperience,
  requestUpdatePhone,
} from './request/profile';

export function* handleGetProfile(action) {
  try {
    const { payload } = action;
    const profile = yield call(getProfile, payload);
    yield put(getProfileSuccess(profile.data));
  } catch (error) {
    yield put(getProfileFailed(error));
  }
}

export function* handleUpdateProfile(action) {
  try {
    const { payload } = action;
    const updProfile = yield call(updateProfile, payload);
    yield put(updateProfileSuccess(updProfile.data));
  } catch (error) {
    yield put(updateProfileFailed(error.message));
  }
}

export function* handlerUpdatePassword(action) {
  try {
    const { payload } = action;
    const updPassword = yield call(updatePassword, payload);
    yield put(updatePasswordSuccess(updPassword.data));
  } catch (error) {
    yield put(updatePasswordFailed(error.message));
  }
}

//* EMAIL
export function* handlerAddEmail(action) {
  try {
    const { payload } = action;
    const newEmail = yield call(requestAddEmail, payload);
    yield put(addEmailSuccess(newEmail.data));
  } catch (error) {
    yield put(addEmailFailed(error.message));
  }
}

export function* handlerRemoveEmail(action) {
  try {
    const { payload } = action;
    const remEmail = yield call(requestRemoveEmail, payload);
    yield put(removeEmailSuccess(remEmail.data));
  } catch (error) {
    yield put(removeEmailFailed(error.message));
  }
}
export function* handlerUpdateEmail(action) {
  try {
    const { payload } = action;
    const updEmail = yield call(requestUpdateEmail, payload);
    yield put(updateEmailSuccess(updEmail.data));
  } catch (error) {
    yield put(updateEmailFailed(error.message));
  }
}

//* PHONE
export function* handlerAddPhone(action) {
  try {
    const { payload } = action;
    const newPhone = yield call(requestAddPhone, payload);
    yield put(addPhoneSuccess(newPhone.data));
  } catch (error) {
    yield put(addPhoneFailed(error.message));
  }
}

export function* handlerRemovePhone(action) {
  try {
    const { payload } = action;
    const remPhone = yield call(requestRemovePhone, payload);
    yield put(removePhoneSuccess(remPhone.data));
  } catch (error) {
    yield put(removePhoneFailed(error.message));
  }
}

export function* handlerUpdatePhone(action) {
  try {
    const { payload } = action;
    const updPhone = yield call(requestUpdatePhone, payload);
    yield put(updatePhoneSuccess(updPhone.data));
  } catch (error) {
    yield put(updatePhoneFailed(error));
  }
}

//* ADDRESS
export function* handlerAddAddress(action) {
  try {
    const { payload } = action;
    const newAddress = yield call(requestAddAddress, payload);
    yield put(addAddressSuccess(newAddress.data));
  } catch (error) {
    yield put(addAddressFailed(error.message));
  }
}

export function* handlerRemoveAddress(action) {
  try {
    const { payload } = action;
    const remAddress = yield call(requestRemoveAddress, payload);
    yield put(removeAddressSuccess({ id: payload, ...remAddress.data }));
  } catch (error) {
    yield put(removeAddressFailed(error.message));
  }
}

export function* handlerUpdateAddress(action) {
  try {
    const { payload } = action;
    const updAddress = yield call(requestUpdateAddress, payload);
    yield put(
      updateAddressSuccess({ id: payload.addressId, ...updAddress.data })
    );
  } catch (error) {
    yield put(updateAddressFailed(error.message));
  }
}

//* EDUCATION
export function* handlerAddEducation(action) {
  try {
    const { payload } = action;
    const addEdu = yield call(requestAddEducation, payload);
    yield put(addEducationSuccess(addEdu.data));
  } catch (error) {
    yield put(addEducationFailed(error.message));
  }
}

export function* handlerRemoveEducation(action) {
  try {
    const { payload } = action;
    const remEdu = yield call(requestRemoveEducation, payload);
    yield put(removeEducationSuccess({ id: payload, ...remEdu.data }));
  } catch (error) {
    yield put(removeEducationFailed(error.message));
  }
}

export function* handlerUpdateEducation(action) {
  try {
    const { payload } = action;
    const updEdu = yield call(requestUpdateEducation, payload);
    yield put(updateEducationSuccess(updEdu.data));
  } catch (error) {
    yield put(updateEducationFailed(error.message));
  }
}

//* EXPERIENCE
export function* handlerAddExperience(action) {
  try {
    const { payload } = action;
    const addExp = yield call(requestAddExperience, payload);
    yield put(addExperienceSuccess(addExp.data));
  } catch (error) {
    yield put(addExperienceFailed(error.message));
  }
}

export function* handlerRemoveExperience(action) {
  try {
    const { payload } = action;
    const remExp = yield call(requestRemoveExperience, payload);
    yield put(removeExperienceSuccess({ id: payload, ...remExp.data }));
  } catch (error) {
    yield put(removeExperienceFailed(error.message));
  }
}

export function* handlerUpdateExperience(action) {
  try {
    const { payload } = action;
    const updExp = yield call(requestUpdateExperience, payload);
    yield put(updateExperienceSuccess(updExp.data));
  } catch (error) {
    yield put(updateExperienceFailed(error.message));
  }
}

//* SKILL
export function* handlerAddSkill(action) {
  try {
    const { payload } = action;
    const newSkl = yield call(requestAddSkill, payload);
    yield put(addSkillSuccess(newSkl.data));
  } catch (error) {
    yield put(addSkillFailed(error.message));
  }
}

export function* handlerRemoveSkill(action) {
  try {
    const { payload } = action;
    const remSkill = yield call(requestRemoveSkill, payload);
    yield put(removeSkillSuccess({ id: payload, ...remSkill.data }));
  } catch (error) {
    yield put(removeSkillFailed(error.message));
  }
}

export function* handlerUploadPhoto(action) {
  try {
    const { payload } = action;
    const uploadPic = yield call(uploadPhoto, payload);
    yield put(uploadPhotoSuc(uploadPic.data));
  } catch (error) {
    yield put(uploadPhotoFal(error.message));
  }
}

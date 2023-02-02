import { actionTypesProfile } from '../Constants/profileType';

// * Profile
export const getProfileRequest = (payload) => ({
  type: actionTypesProfile.GET_PROFILE_REQUEST,
  payload,
});

export const getProfileSuccess = (payload) => ({
  type: actionTypesProfile.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFailed = (payload) => ({
  type: actionTypesProfile.GET_PROFILE_FAILED,
  payload,
});

export const updateProfileRequest = (payload) => ({
  type: actionTypesProfile.UPD_PROFILE_REQUEST,
  payload,
});

export const updateProfileSuccess = (payload) => ({
  type: actionTypesProfile.UPD_PROFILE_SUCCESS,
  payload,
});

export const updateProfileFailed = (payload) => ({
  type: actionTypesProfile.UPD_PROFILE_FAILED,
  payload,
});

//* PASSWORD
export const updatePasswordRequest = (payload) => ({
  type: actionTypesProfile.UPD_PASSWORD_REQUEST,
  payload,
});

export const updatePasswordSuccess = (payload) => ({
  type: actionTypesProfile.UPD_PASSWORD_SUCCESS,
  payload,
});

export const updatePasswordFailed = (payload) => ({
  type: actionTypesProfile.UPD_PASSWORD_FAILED,
  payload,
});

// * Emails
export const addEmailRequest = (payload) => ({
  type: actionTypesProfile.ADD_EMAIL_REQUEST,
  payload,
});

export const addEmailSuccess = (payload) => ({
  type: actionTypesProfile.ADD_EMAIL_SUCCESS,
  payload,
});

export const addEmailFailed = (payload) => ({
  type: actionTypesProfile.ADD_EMAIL_FAILED,
  payload,
});

export const removeEmailRequest = (payload) => ({
  type: actionTypesProfile.REM_EMAIL_REQUEST,
  payload,
});

export const removeEmailSuccess = (payload) => ({
  type: actionTypesProfile.REM_EMAIL_SUCCESS,
  payload,
});

export const removeEmailFailed = (payload) => ({
  type: actionTypesProfile.REM_EMAIL_FAILED,
  payload,
});

export const updateEmailRequest = (payload) => ({
  type: actionTypesProfile.UPD_EMAIL_REQUEST,
  payload,
});

export const updateEmailSuccess = (payload) => ({
  type: actionTypesProfile.UPD_EMAIL_SUCCESS,
  payload,
});

export const updateEmailFailed = (payload) => ({
  type: actionTypesProfile.UPD_EMAIL_FAILED,
  payload,
});

//* Phone
export const addPhoneRequest = (payload) => ({
  type: actionTypesProfile.ADD_PHONE_REQUEST,
  payload,
});

export const addPhoneSuccess = (payload) => ({
  type: actionTypesProfile.ADD_PHONE_SUCCESS,
  payload,
});

export const addPhoneFailed = (payload) => ({
  type: actionTypesProfile.ADD_PHONE_FAILED,
  payload,
});

export const removePhoneRequest = (payload) => ({
  type: actionTypesProfile.REM_PHONE_REQUEST,
  payload,
});

export const removePhoneSuccess = (payload) => ({
  type: actionTypesProfile.REM_PHONE_SUCCESS,
  payload,
});

export const removePhoneFailed = (payload) => ({
  type: actionTypesProfile.REM_PHONE_FAILED,
  payload,
});

export const updatePhoneRequest = (payload) => ({
  type: actionTypesProfile.UPD_PHONE_REQUEST,
  payload,
});

export const updatePhoneSuccess = (payload) => ({
  type: actionTypesProfile.UPD_PHONE_SUCCESS,
  payload,
});

export const updatePhoneFailed = (payload) => ({
  type: actionTypesProfile.UPD_PHONE_FAILED,
  payload,
});

//* Address
export const addAddressRequest = (payload) => ({
  type: actionTypesProfile.ADD_ADDRESS_REQUEST,
  payload,
});

export const addAddressSuccess = (payload) => ({
  type: actionTypesProfile.ADD_ADDRESS_SUCCESS,
  payload,
});

export const addAddressFailed = (payload) => ({
  type: actionTypesProfile.ADD_ADDRESS_FAILED,
  payload,
});

export const removeAddressRequest = (payload) => ({
  type: actionTypesProfile.REM_ADDRESS_REQUEST,
  payload,
});

export const removeAddressSuccess = (payload) => ({
  type: actionTypesProfile.REM_ADDRESS_SUCCESS,
  payload,
});

export const removeAddressFailed = (payload) => ({
  type: actionTypesProfile.REM_ADDRESS_FAILED,
  payload,
});

export const updateAddressRequest = (payload) => ({
  type: actionTypesProfile.UPD_ADDRESS_REQUEST,
  payload,
});

export const updateAddressSuccess = (payload) => ({
  type: actionTypesProfile.UPD_ADDRESS_SUCCESS,
  payload,
});

export const updateAddressFailed = (payload) => ({
  type: actionTypesProfile.UPD_ADDRESS_FAILED,
  payload,
});

//* EDUCATION
export const addEducationRequest = (payload) => ({
  type: actionTypesProfile.ADD_EDUCATION_REQUEST,
  payload,
});

export const addEducationSuccess = (payload) => ({
  type: actionTypesProfile.ADD_EDUCATION_SUCCESS,
  payload,
});

export const addEducationFailed = (payload) => ({
  type: actionTypesProfile.ADD_EDUCATION_FAILED,
  payload,
});

export const removeEducationRequest = (payload) => ({
  type: actionTypesProfile.REM_EDUCATION_REQUEST,
  payload,
});

export const removeEducationSuccess = (payload) => ({
  type: actionTypesProfile.REM_EDUCATION_SUCCESS,
  payload,
});

export const removeEducationFailed = (payload) => ({
  type: actionTypesProfile.REM_EDUCATION_FAILED,
  payload,
});

export const updateEducationRequest = (payload) => ({
  type: actionTypesProfile.UPD_EDUCATION_REQUEST,
  payload,
});

export const updateEducationSuccess = (payload) => ({
  type: actionTypesProfile.UPD_EDUCATION_SUCCESS,
  payload,
});

export const updateEducationFailed = (payload) => ({
  type: actionTypesProfile.UPD_EDUCATION_FAILED,
  payload,
});

//* EXPERIENCE
export const addExperienceRequest = (payload) => ({
  type: actionTypesProfile.ADD_EXPERIENCE_REQUEST,
  payload,
});

export const addExperienceSuccess = (payload) => ({
  type: actionTypesProfile.ADD_EXPERIENCE_SUCCESS,
  payload,
});

export const addExperienceFailed = (payload) => ({
  type: actionTypesProfile.ADD_EXPERIENCE_FAILED,
  payload,
});

export const removeExperienceRequest = (payload) => ({
  type: actionTypesProfile.REM_EXPERIENCE_REQUEST,
  payload,
});

export const removeExperienceSuccess = (payload) => ({
  type: actionTypesProfile.REM_EXPERIENCE_SUCCESS,
  payload,
});

export const removeExperienceFailed = (payload) => ({
  type: actionTypesProfile.REM_EXPERIENCE_FAILED,
  payload,
});

export const updateExperienceRequest = (payload) => ({
  type: actionTypesProfile.UPD_EXPERIENCE_REQUEST,
  payload,
});

export const updateExperienceSuccess = (payload) => ({
  type: actionTypesProfile.UPD_EXPERIENCE_SUCCESS,
  payload,
});

export const updateExperienceFailed = (payload) => ({
  type: actionTypesProfile.UPD_EXPERIENCE_FAILED,
  payload,
});

//* SKILL
export const addSkillRequest = (payload) => ({
  type: actionTypesProfile.ADD_SKILL_REQUEST,
  payload,
});

export const addSkillSuccess = (payload) => ({
  type: actionTypesProfile.ADD_SKILL_SUCCESS,
  payload,
});

export const addSkillFailed = (payload) => ({
  type: actionTypesProfile.ADD_SKILL_FAILED,
  payload,
});

export const removeSkillRequest = (payload) => ({
  type: actionTypesProfile.REM_SKILL_REQUEST,
  payload,
});

export const removeSkillSuccess = (payload) => ({
  type: actionTypesProfile.REM_SKILL_SUCCESS,
  payload,
});

export const removeSkillFailed = (payload) => ({
  type: actionTypesProfile.REM_SKILL_FAILED,
  payload,
});

export const updateSkillRequest = (payload) => ({
  type: actionTypesProfile.UPD_SKILL_REQUEST,
  payload,
});

export const updateSkillSuccess = (payload) => ({
  type: actionTypesProfile.UPD_SKILL_SUCCESS,
  payload,
});

export const updateSkillFailed = (payload) => ({
  type: actionTypesProfile.UPD_SKILL_FAILED,
  payload,
});

export const uploadPhotoReq = (payload) => ({
  type: actionTypesProfile.UPD_PHOTO_PROFILE_REQ,
  payload,
});

export const uploadPhotoSuc = (payload) => ({
  type: actionTypesProfile.UPD_PHOTO_PROFILE_SUC,
  payload,
});

export const uploadPhotoFal = (payload) => ({
  type: actionTypesProfile.UPD_PHOTO_PROFILE_FAL,
  payload,
});

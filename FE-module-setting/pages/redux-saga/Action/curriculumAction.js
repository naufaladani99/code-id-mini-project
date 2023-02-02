import { actionTypesCurriculum } from '../Constants/curriculumType';

export const getCurriculumsReq = () => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_REQEUST,
});

export const getCurriculumsSuc = (payload) => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_SUCCESS,
  payload,
});

export const getCurriculumsFal = (payload) => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_FAILED,
  payload,
});

export const removeCurriculumReq = (payload) => ({
  type: actionTypesCurriculum.REM_CURRICULUM_REQEUST,
  payload,
});

export const removeCurriculumSuc = (payload) => ({
  type: actionTypesCurriculum.REM_CURRICULUM_SUCCESS,
  payload,
});

export const removeCurriculumFal = (payload) => ({
  type: actionTypesCurriculum.REM_CURRICULUM_FAILED,
  payload,
});

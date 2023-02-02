import * as ActionType from "../Constants/JobPostConstant";

export const GetJobPostRequest = () => ({
  type: ActionType.GET_JOBPOST_REQUEST,
});

export const GetJobPostSuccess = (payload) => ({
  type: ActionType.GET_JOBPOST_SUCCESS,
  payload,
});

export const GetJobPostFailed = (payload) => ({
  type: ActionType.GET_JOBPOST_FAILED,
  payload,
});

export const GetOneJobPostRequest = (payload) => ({
  type: ActionType.GETONE_JOBPOST_REQUEST,
  payload,
});

export const GetOneJobPostSuccess = (payload) => ({
  type: ActionType.GETONE_JOBPOST_SUCCESS,
  payload,
});

export const GetOneJobPostFailed = (payload) => ({
  type: ActionType.GETONE_JOBPOST_FAILED,
  payload,
});
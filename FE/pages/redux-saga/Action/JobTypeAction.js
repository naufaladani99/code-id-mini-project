import * as ActionType from "../Constants/JobTypeConstant";

export const GetJobTypeRequest = () => ({
  type: ActionType.GET_JOBTYPE_REQUEST,
});

export const GetJobTypeSuccess = (payload) => ({
  type: ActionType.GET_JOBTYPE_SUCCESS,
  payload,
});

export const GetJobTypeFailed = (payload) => ({
  type: ActionType.GET_JOBTYPE_FAILED,
  payload,
});

export const GetOneJobTypeRequest = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_REQUEST,
  payload,
});

export const GetOneJobTypeSuccess = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_SUCCESS,
  payload,
});

export const GetOneJobTypeFailed = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_FAILED,
  payload,
})
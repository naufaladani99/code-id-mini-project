import * as ActionType from "../Constants/JobCategoryConstant";

export const GetJobCategoryRequest = () => ({
  type: ActionType.GET_JOBCATEGORY_REQUEST,
});

export const GetJobCategorySuccess = (payload) => ({
  type: ActionType.GET_JOBCATEGORY_SUCCESS,
  payload,
});

export const GetJobCategoryFailed = (payload) => ({
  type: ActionType.GET_JOBCATEGORY_FAILED,
  payload,
});

export const GetOneJobCategoryRequest = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_REQUEST,
  payload,
});

export const GetOneJobCategorySuccess = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_SUCCESS,
  payload,
});

export const GetOneJobCategoryFailed = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_FAILED,
  payload,
})
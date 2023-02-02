import * as ActionType from "../Constants/JobCategoryConstant";

const INIT_STATE = {
  jobcategories: [],
  jobcategory: [],
};

const JobCategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_JOBCATEGORY_SUCCESS:
      return GetJobCategorySuccessed(state, action);
    case ActionType.GETONE_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GETONE_JOBCATEGORY_SUCCESS:
      return GetOneJobCategorySuccessed(state, action);
    default:
      return state;
  }
};

const GetJobCategorySuccessed = (state, action) => {
  return {
    ...state,
    jobcategories: action.payload,
  };
};

const GetOneJobCategorySuccessed = (state, action) => {
  return {
    ...state,
    jobcategory: action.payload,
  };
};

export default JobCategoryReducer;
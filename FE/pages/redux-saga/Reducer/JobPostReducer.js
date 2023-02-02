import * as ActionType from "../Constants/JobPostConstant";

const INIT_STATE = {
  jobposts: [],
  jobpost: [],
};

const JobPostReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOBPOST_REQUEST:
      return { ...state };
    case ActionType.GET_JOBPOST_SUCCESS:
      return GetJobPostSuccessed(state, action);
    case ActionType.GETONE_JOBPOST_REQUEST:
      return { ...state };
    case ActionType.GETONE_JOBPOST_SUCCESS:
      return GetOneJobPostSuccessed(state, action);
    default:
      return state;
  }
};

const GetJobPostSuccessed = (state, action) => {
  return {
    ...state,
    jobposts: action.payload,
  };
};

const GetOneJobPostSuccessed = (state, action) => {
  return {
    ...state,
    jobpost: action.payload,
  };
};

export default JobPostReducer;
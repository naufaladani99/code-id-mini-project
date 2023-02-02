import * as ActionType from "../Constants/JobTypeConstant";

const INIT_STATE = {
  jobtypes: [],
  jobtype: [],
};

const JobTypeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.GET_JOBTYPE_SUCCESS:
      return GetJobTypeSuccessed(state, action);
    case ActionType.GETONE_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.GETONE_JOBTYPE_SUCCESS:
      return GetOneJobTypeSuccessed(state, action);
    default:
      return state;
  }
};

const GetJobTypeSuccessed = (state, action) => {
  return {
    ...state,
    jobtypes: action.payload,
  };
};

const GetOneJobTypeSuccessed = (state, action) => {
  return {
    ...state,
    jobtype: action.payload,
  };
};

export default JobTypeReducer;

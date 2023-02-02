import * as ActionType from "../Constants/IncoConstant";

const INIT_STATE = {
  incos: [],
  inco: [],
};

const IncoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_INCO_REQUEST:
      return { ...state };
    case ActionType.GET_INCO_SUCCESS:
      return GetIncosuccessed(state, action);
    case ActionType.GETONE_INCO_REQUEST:
      return { ...state };
    case ActionType.GETONE_INCO_SUCCESS:
      return GetOneIncoSuccessed(state, action);
    default:
      return state;
  }
};

const GetIncosuccessed = (state, action) => {
  return {
    ...state,
    incos: action.payload,
  };
};

const GetOneIncoSuccessed = (state, action) => {
  return {
    ...state,
    inco: action.payload,
  };
};

export default IncoReducer;

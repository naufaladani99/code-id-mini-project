import * as ActionType from "../Constants/CorseConstant";

const INIT_STATE = {
  corse: [],
  corses: [],
};

const CorseReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CORSE_REQUEST:
      return { ...state };
    case ActionType.GET_CORSE_SUCCESS:
      return GetCorseSuccessed(state, action);
    case ActionType.GETONE_CORSE_REQUEST:
      return { ...state };
    case ActionType.GETONE_CORSE_SUCCESS:
      return GetOneCorseSuccessed(state, action);
    default:
      return state;
  }
};

const GetCorseSuccessed = (state, action) => {
  return {
    ...state,
    corses: action.payload,
  };
};

const GetOneCorseSuccessed = (state, action) => {
  return {
    ...state,
    corse: action.payload,
  };
};

export default CorseReducer;

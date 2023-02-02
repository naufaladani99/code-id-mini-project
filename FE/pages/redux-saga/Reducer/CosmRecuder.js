import * as ActionType from "../Constants/CosmConstant";

const INIT_STATE = {
  cosms: [],
  cosm: [],
};

const CosmReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_COSM_REQUEST:
      return { ...state };
    case ActionType.GET_COSM_SUCCESS:
      return GetCosmsuccessed(state, action);
    case ActionType.GETONE_COSM_REQUEST:
      return { ...state };
    case ActionType.GETONE_COSM_SUCCESS:
      return GetOneCosmSuccessed(state, action);
    default:
      return state;
  }
};

const GetCosmsuccessed = (state, action) => {
  return {
    ...state,
    cosms: action.payload,
  };
};

const GetOneCosmSuccessed = (state, action) => {
  return {
    ...state,
    cosm: action.payload,
  };
};

export default CosmReducer;

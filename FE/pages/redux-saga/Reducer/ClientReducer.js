import * as ActionType from "../Constants/ClientConstant";

const INIT_STATE = {
  clients: [],
  client: [],
};

const ClientReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CLIENT_REQUEST:
      return { ...state };
    case ActionType.GET_CLIENT_SUCCESS:
      return GetClientSuccessed(state, action);
    case ActionType.GETONE_CLIENT_REQUEST:
      return { ...state };
    case ActionType.GETONE_CLIENT_SUCCESS:
      return GetOneClientSuccessed(state, action);
    default:
      return state;
  }
};

const GetClientSuccessed = (state, action) => {
  return {
    ...state,
    clients: action.payload,
  };
};

const GetOneClientSuccessed = (state, action) => {
  return {
    ...state,
    client: action.payload,
  };
};

export default ClientReducer;
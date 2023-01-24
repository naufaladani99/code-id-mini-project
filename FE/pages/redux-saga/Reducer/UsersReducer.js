import * as ActionType from "../Constants/UsersConstant";

const INIT_STATE = {
  ListUsers: [],
  ListAllUsers: [],
};

const usersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_USERS_REQUEST:
      return state;
    case ActionType.GET_ALL_USERS_SUCCES:
      return GetAllUserSuccessed(state, action);
    case ActionType.GET_ID_USERS_REQUEST:
      return state;
    case ActionType.GET_ID_USERS_SUCCES:
      return GetOneIdUserSuccessed(state, action);
    default:
      return state;
  }
};
const GetAllUserSuccessed = (state, action) => {
  return {
    ...state,
    ListAllUsers: action.payload,
  };
};

const GetOneIdUserSuccessed = (state, action) => {
  return {
    ...state,
    ListUsers: action.payload,
  };
};

export default usersReducer;

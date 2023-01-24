import * as actionType from "../Constants/UsersConstant";

export const doGetUsersAllRequest = (payload) => ({
  type: actionType.GET_ALL_USERS_REQUEST,
  payload,
});

export const doGetUsersAllSucces = (payload) => ({
  type: actionType.GET_ALL_USERS_SUCCES,
  payload,
});

export const doGetUsersAllFailed = (payload) => ({
  type: actionType.GET_ALL_USERS_FAILED,
  payload,
});

export const doGetUsersIdRequest = (payload) => ({
  type: actionType.GET_ID_USERS_REQUEST,
  payload,
});

export const doGetUsersIdSucces = (payload) => ({
  type: actionType.GET_ID_USERS_SUCCES,
  payload,
});

export const doGetUsersIdFailed = (payload) => ({
  type: actionType.GET_ID_USERS_FAILED,
  payload,
});

import * as ActionType from "../Constants/ClientConstant";

export const GetClientRequest = () => ({
  type: ActionType.GET_CLIENT_REQUEST,
});

export const GetClientSuccess = (payload) => ({
  type: ActionType.GET_CLIENT_SUCCESS,
  payload,
});

export const GetClientFailed = (payload) => ({
  type: ActionType.GET_CLIENT_FAILED,
  payload,
});

export const GetOneClientRequest = (payload) => ({
  type: ActionType.GETONE_CLIENT_REQUEST,
  payload,
});

export const GetOneClientSuccess = (payload) => ({
  type: ActionType.GETONE_CLIENT_SUCCESS,
  payload,
});

export const GetOneClientFailed = (payload) => ({
  type: ActionType.GETONE_CLIENT_FAILED,
  payload,
})
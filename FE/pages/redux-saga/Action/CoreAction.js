import * as ActionType from "../Constants/CoreConstant";

export const GetCoreRequest = () => ({
  type: ActionType.GET_CORE_REQUEST,
});

export const GetCoreSuccess = (payload) => ({
  type: ActionType.GET_CORE_SUCCESS,
  payload,
});

export const GetCoreFailed = (payload) => ({
  type: ActionType.GET_CORE_FAILED,
  payload,
});

export const GetOneCoreRequest = (payload) => ({
  type: ActionType.GETONE_CORE_REQUEST,
  payload,
});

export const GetOneCoreSuccess = (payload) => ({
  type: ActionType.GETONE_CORE_SUCCESS,
  payload,
});

export const GetOneCoreFailed = (payload) => ({
  type: ActionType.GETONE_CORE_FAILED,
  payload,
});

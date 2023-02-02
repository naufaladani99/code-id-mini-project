import * as ActionType from "../Constants/CorseConstant";

export const GetCorseRequest = () => ({
  type: ActionType.GET_CORSE_REQUEST,
});

export const GetCorseSuccess = (payload) => ({
  type: ActionType.GET_CORSE_SUCCESS,
  payload,
});

export const GetCorseFailed = (payload) => ({
  type: ActionType.GET_CORSE_FAILED,
  payload,
});

export const GetOneCorseRequest = (payload) => ({
  type: ActionType.GETONE_CORSE_REQUEST,
  payload,
});

export const GetOneCorseSuccess = (payload) => ({
  type: ActionType.GETONE_CORSE_SUCCESS,
  payload,
});

export const GetOneCorseFailed = (payload) => ({
  type: ActionType.GETONE_CORSE_FAILED,
  payload,
});

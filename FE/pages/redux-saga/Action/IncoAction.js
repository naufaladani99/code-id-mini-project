import * as ActionType from "../Constants/IncoConstant";

export const GetIncoRequest = (payload) => ({
  type: ActionType.GET_INCO_REQUEST,
  payload,
});

export const GetIncoSuccess = (payload) => ({
  type: ActionType.GET_INCO_SUCCESS,
  payload,
});

export const GetIncoFailed = (payload) => ({
  type: ActionType.GET_INCO_FAILED,
  payload,
});

export const GetOneIncoRequest = (payload) => ({
  type: ActionType.GETONE_INCO_REQUEST,
});

export const GetOneIncoSuccess = (payload) => ({
  type: ActionType.GETONE_INCO_SUCCESS,
  payload,
});

export const GetOneIncoFailed = (payload) => ({
  type: ActionType.GETONE_INCO_FAILED,
  payload,
});

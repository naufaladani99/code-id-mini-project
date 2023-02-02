import * as ActionType from "../Constants/CosmConstant";

export const GetCosmRequest = (payload) => ({
  type: ActionType.GET_COSM_REQUEST,
  payload,
});

export const GetCosmSuccess = (payload) => ({
  type: ActionType.GET_COSM_SUCCESS,
  payload,
});

export const GetCosmFailed = (payload) => ({
  type: ActionType.GET_COSM_FAILED,
  payload,
});

export const GetOneCosmRequest = (payload) => ({
  type: ActionType.GETONE_COSM_REQUEST,
});

export const GetOneCosmSuccess = (payload) => ({
  type: ActionType.GETONE_COSM_SUCCESS,
  payload,
});

export const GetOneCosmFailed = (payload) => ({
  type: ActionType.GETONE_COSM_FAILED,
  payload,
});

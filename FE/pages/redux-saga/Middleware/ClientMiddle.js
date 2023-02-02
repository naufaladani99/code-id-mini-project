import { call, put } from "redux-saga/effects";
import ClientApi from "../../../pages/api/ClientApi";
import {
  GetClientSuccess,
  GetClientFailed,
  GetOneClientSuccess,
  GetOneClientFailed,
} from "../Action/ClientAction";

function* handleGetClient() {
  try {
    const result = yield call(ClientApi.List);
    yield put(GetClientSuccess(result));
  } catch (error) {
    yield put(GetClientFailed(error));
  }
}

function* handleGetOneClient(action) {
  const { payload } = action;
  try {
    const result = yield call(ClientApi.FindOne, payload);
    yield put(GetOneClientSuccess(result));
  } catch (error) {
    yield put(GetOneClientFailed(error));
  }
}

export { handleGetOneClient, handleGetClient };
import { call, put } from "redux-saga/effects";
import CorseApi from "../../api/CorseApi";
import {
  GetCorseFailed,
  GetCorseSuccess,
  GetOneCorseFailed,
  GetOneCorseSuccess,
} from "../Action/CorseAction";

function* handleGetCorse() {
  try {
    const result = yield call(CorseApi.list);
    yield put(GetCorseSuccess(result));
  } catch (error) {
    yield put(GetCorseFailed(error));
  }
}

function* handleGetOneCorse(action) {
  const { payload } = action;
  try {
    const result = yield call(CorseApi.FindOne, payload);
    yield put(GetOneCorseSuccess(result));
  } catch (error) {
    yield put(GetOneCorseFailed(error));
  }
}

export { handleGetCorse, handleGetOneCorse };

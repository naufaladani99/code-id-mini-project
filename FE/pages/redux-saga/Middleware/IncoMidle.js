import { call, put } from "redux-saga/effects";
import IncoApi from "../../api/IncoApi";
import { GetIncoSuccess, GetIncoFailed } from "../Action/IncoAction";

function* handleGetInco() {
  try {
    const result = yield call(IncoApi.list);
    yield put(GetIncoSuccess(result));
  } catch (error) {
    yield put(GetIncoFailed(error));
  }
}

function* handleGetOneInco(action) {
  const { payload } = action;
  try {
    const result = yield call(IncoApi.FindOne, payload);
    yield put(GetOneIncoSuccess(result));
  } catch (error) {
    yield put(GetOneIncoFailed(error));
  }
}

export { handleGetInco, handleGetOneInco };

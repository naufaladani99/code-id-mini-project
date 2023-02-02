import { call, put } from "redux-saga/effects";
import JobTypeApi from "../../../pages/api/JobTypeApi";
import {
  GetJobTypeSuccess,
  GetJobTypeFailed,
  GetOneJobTypeSuccess,
  GetOneJobTypeFailed,
} from "../Action/JobTypeAction";

function* handleGetJobType() {
  try {
    const result = yield call(JobTypeApi.List);
    yield put(GetJobTypeSuccess(result));
  } catch (error) {
    yield put(GetJobTypeFailed(error));
  }
}

function* handleGetOneJobType(action) {
  const { payload } = action;
  try {
    const result = yield call(JobTypeApi.FindOne, payload);
    yield put(GetOneJobTypeSuccess(result));
  } catch (error) {
    yield put(GetOneJobTypeFailed(error));
  }
}

export { handleGetOneJobType, handleGetJobType };

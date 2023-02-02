import { call, put } from "redux-saga/effects";
import JobPostApi from "../../../pages/api/JobPostApi";
import {
  GetJobPostSuccess,
  GetJobPostFailed,
  GetOneJobPostSuccess,
  GetOneJobPostFailed,
} from "../Action/JobPostAction";

function* handleGetJobPost() {
  try {
    const result = yield call(JobPostApi.List);
    yield put(GetJobPostSuccess(result));
  } catch (error) {
    yield put(GetJobPostFailed(error));
  }
}

function* handleGetOneJobPost(action) {
  const { payload } = action;
  try {
    const result = yield call(JobPostApi.FindOne, payload);
    yield put(GetOneJobPostSuccess(result));
  } catch (error) {
    yield put(GetOneJobPostFailed(error));
  }
}

export { handleGetOneJobPost, handleGetJobPost };

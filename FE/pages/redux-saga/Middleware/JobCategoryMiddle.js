import { call, put } from "redux-saga/effects";
import JobCategoryApi from "../../../pages/api/JobCategoryApi";
import {
  GetJobCategorySuccess,
  GetJobCategoryFailed,
  GetOneJobCategorySuccess,
  GetOneJobCategoryFailed,
} from "../Action/JobCategoryAction";

function* handleGetJobCategory() {
  try {
    const result = yield call(JobCategoryApi.List);
    yield put(GetJobCategorySuccess(result));
  } catch (error) {
    yield put(GetJobCategoryFailed(error));
  }
}

function* handleGetOneJobCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(JobCategoryApi.FindOne, payload);
    yield put(GetOneJobCategorySuccess(result));
  } catch (error) {
    yield put(GetOneJobCategoryFailed(error));
  }
}

export { handleGetOneJobCategory, handleGetJobCategory };
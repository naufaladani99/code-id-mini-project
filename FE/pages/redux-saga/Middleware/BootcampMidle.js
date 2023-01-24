import { call, put } from "redux-saga/effects";
import ProgramEntityApi from "../../api/ProgramEntityApi";
import CourseReviewApi from "../../api/CourseReviewApi";
import {
  doGetBootcampSucces,
  doGetBootcampFailed,
  doGetReviewSucces,
  doGetReviewFailed,
} from "../Action/BootcampAction";
import {
  GET_ID_BOOTCAMP_FAILED,
  GET_ID_BOOTCAMP_SUCCES,
} from "../Constants/BootcampConstant";

//programentity get all
function* listBootcamp() {
  try {
    const result = yield call(ProgramEntityApi.list);
    yield put(doGetBootcampSucces(result));
  } catch (error) {
    yield put(doGetBootcampFailed(error));
  }
}
//program entity get by id
function* listBootcampId() {
  try {
    const result = yield call(ProgramEntityApi.FindOne);
    yield put(GET_ID_BOOTCAMP_SUCCES(result));
  } catch (error) {
    yield put(GET_ID_BOOTCAMP_FAILED(error));
  }
}
//course review get all
function* listReview() {
  try {
    const result = yield call(CourseReviewApi.list);
    yield put(doGetReviewSucces(result));
  } catch (error) {
    yield put(doGetReviewFailed(error));
  }
}
export { listBootcamp, listBootcampId, listReview };

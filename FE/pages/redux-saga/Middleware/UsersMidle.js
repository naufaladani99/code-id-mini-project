import { call, put } from "redux-saga/effects";
import UsersApi from "../../api/UsersApi";
import {
  doGetUsersAllSucces,
  doGetUsersAllFailed,
  doGetUsersIdSuccesSucces,
  doGetUsersIdFailed,
} from "../Action/UsersAction";

function* listUsersAll() {
  //users get by id
  try {
    const result = yield call(UsersApi.findAll);
    yield put(doGetUsersAllSucces(result));
  } catch (error) {
    yield put(doGetUsersAllFailed, error);
  }
}

function* listUsers() {
  //users get by id
  try {
    const result = yield call(UsersApi.FindOne);
    yield put(doGetUsersIdSuccesSucces(result));
  } catch (error) {
    yield put(doGetUsersIdFailed(error));
  }
}

export { listUsersAll, listUsers };

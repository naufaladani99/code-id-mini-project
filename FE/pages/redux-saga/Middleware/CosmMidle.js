import { call, put } from "redux-saga/effects";
import CosmApi from "../../api/CosmApi";
import { GetCosmSuccess, GetCosmFailed } from "../Action/CosmAction";

function* handleGetCosm() {
  try {
    const result = yield call(CosmApi.list);
    yield put(GetCosmSuccess(result));
  } catch (error) {
    yield put(GetCosmFailed(error));
  }
}

function* handleGetOneCosm(action) {
  const { payload } = action;
  try {
    const result = yield call(CosmApi.FindOne, payload);
    yield put(GetOneCosmSuccess(result));
  } catch (error) {
    yield put(GetOneCosmFailed(error));
  }
}

export { handleGetCosm, handleGetOneCosm };

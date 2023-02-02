import { call, put } from "redux-saga/effects";
import ProgApi from "../../api/ProgApi";
import { GetProgSuccess, GetProgFailed, GetOneProgSuccess, GetOneProgFailed } from "../Action/ProgAction";

function* handleGetProg(){
    try {
        const result = yield call(ProgApi.list)
        yield put(GetProgSuccess(result))
    } catch (error) {
        yield put(GetProgFailed(error))
    }
}

function* handleGetOneProg(action){
    const { payload } = action
    try {
        const result = yield call(ProgApi.FindOne, payload)
        yield put(GetOneProgSuccess(result))
    } catch (error) {
        yield put(GetOneProgFailed(error))
    }
}

export { handleGetProg, handleGetOneProg }
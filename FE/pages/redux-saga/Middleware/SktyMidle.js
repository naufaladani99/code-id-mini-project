import { call, put } from "redux-saga/effects";
import SktyApi from "../../api/SktyApi";
import { GetOneSktyFailed, GetOneSktySuccess, GetSktyFailed, GetSktySuccess } from "../Action/SktyAction";

function* handleGetSkty(){
    try {
        const result = yield call(SktyApi.list)
        yield put(GetSktySuccess(result))
    } catch (error) {
        yield put(GetSktyFailed(error))
    }
}

function* handleGetOneSkty(action){
    const { payload } = action
    try {
        const result = yield call(SktyApi.FindOne, payload)
        yield put(GetOneSktySuccess(result))
    } catch (error) {
        yield put(GetOneSktyFailed(error))
    }
}

export { handleGetSkty, handleGetOneSkty }
import { call, put } from "redux-saga/effects";
import SkteApi from "../../api/SkteApi";
import { GetOneSkteFailed, GetOneSkteSuccess, GetSkteFailed, GetSkteSuccess } from "../Action/SkteAction";

function* handleGetSkte(){
    try {
        const result = yield call(SkteApi.list)
        yield put(GetSkteSuccess(result))
    } catch (error) {
        yield put(GetSkteFailed(error))
    }
}

function* handleGetOneSkte(action){
    const { payload } = action
    try {
        const result = yield call(SkteApi.FindOne, payload)
        yield put(GetOneSkteSuccess(result))
    } catch (error) {
        yield put(GetOneSkteFailed(error))
    }
}

export { handleGetSkte, handleGetOneSkte }
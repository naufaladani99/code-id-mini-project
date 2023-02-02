import { call, put } from "redux-saga/effects";
import CoreApi from "../../api/CoreApi";
import { GetCoreFailed, GetCoreSuccess, GetOneCoreFailed, GetOneCoreSuccess } from "../Action/CoreAction";

function* handleGetCore(){
    try {
        const result = yield call(CoreApi.list)
        yield put(GetCoreSuccess(result))
    } catch (error) {
        yield put(GetCoreFailed(error))
    }
}

function* handleGetOneCore(action){
    const { payload } = action
    try {
        const result = yield call(CoreApi.FindOne, payload)
        yield put(GetOneCoreSuccess(result))
    } catch (error) {
        yield put(GetOneCoreFailed(error))
    }
}

export { handleGetCore, handleGetOneCore }
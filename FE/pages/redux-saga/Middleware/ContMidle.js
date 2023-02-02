import { call, put } from "redux-saga/effects";
import ContApi from "../../api/ContApi";
import { GetContSuccess, GetContFailed, GetOneContSuccess, GetOneContFailed } from "../Action/ContAction";

function* handleGetCont(){
    try {
        const result = yield call(ContApi.list)
        yield put(GetContSuccess(result))
    } catch (error) {
        yield put(GetContFailed(error))
    }
}

function* handleGetOneCont(action){
    const { payload } = action
    try {
        const result = yield call(ContApi.FindOne, payload)
        yield put(GetOneContSuccess(result))
    } catch (error) {
        yield put(GetOneContFailed(error))
    }
}

export { handleGetCont, handleGetOneCont }
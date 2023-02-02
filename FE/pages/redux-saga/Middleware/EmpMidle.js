import { call, put } from "redux-saga/effects";
import EmpApi from "../../api/EmpApi";
import { GetEmpFailed, GetEmpSuccess, GetOneEmpFailed, GetOneEmpSuccess } from "../Action/EmpAction";

function* handleGetEmp(){
    try {
        const result = yield call(EmpApi.list)
        yield put(GetEmpSuccess(result))
    } catch (error) {
        yield put(GetEmpFailed(error))
    }
}

function* handleGetOneEmp(action){
    const { payload } = action
    try {
        const result = yield call(EmpApi.FindOne, payload)
        yield put(GetOneEmpSuccess(result))
    } catch (error) {
        yield put(GetOneEmpFailed(error))
    }
}

export { handleGetEmp, handleGetOneEmp }
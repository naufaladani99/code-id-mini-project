import { call, put } from 'redux-saga/effects'
import TaapApi from '../../api/TaapApi'
import {
    GetTaapSuccess, GetTaapFailed, GetTaapUserSuccess, GetTaapUserFailed, AddTaapSuccess, AddTaapFailed
    , AddTaapApplySuccess, AddTaapApplyFailed, DelTaapSuccess, DelTaapFailed
    , GetOneTaapSuccess, GetOneTaapFailed, EditTaapSuccess, EditTaapFailed
} from '../Action/TaapAction'

function* handleGetTaap() {
    try {
        const result = yield call(TaapApi.getAll)
        yield put(GetTaapSuccess(result.data))
    } catch (error) {
        yield put(GetTaapFailed(error))
    }
}

function* handleGetTaapUser() {
    try {
        const result = yield call(TaapApi.getAllUser)
        yield put(GetTaapUserSuccess(result.data))
    } catch (error) {
        yield put(GetTaapUserFailed(error))
    }
}

function* handleGetOneTaap(action) {
    const { payload } = action
    try {
        const result = yield call(TaapApi.getOne, payload)
        yield put(GetOneTaapSuccess(result))
    } catch (error) {
        yield put(GetOneTaapFailed(error))
    }
}

function* handleDelTaap(action) {
    const { payload } = action
    try {
        const result = yield call(TaapApi.Delete, payload)
        yield put(DelTaapSuccess(result.data))
    } catch (error) {
        yield put(DelTaapFailed(error))
    }
}

function* handleAddTaap(action) {
    const { payload } = action
    try {
        const result = yield call(TaapApi.create, payload)
        yield put(AddTaapSuccess(result.data))
    } catch (error) {
        yield put(AddTaapFailed(error))
    }
}

function* handleAddTaapApply(action) {
    const { payload } = action
    try {
        const result = yield call(TaapApi.apply, payload)
        yield put(AddTaapApplySuccess(result.data))
    } catch (error) {
        yield put(AddTaapApplyFailed(error))
    }
}

function* handleEditTaap(action) {
    const { payload } = action
    try {
        const result = yield call(TaapApi.update, payload)
        yield put(EditTaapSuccess(result.data))
    } catch (error) {
        yield put(EditTaapFailed(error))
    }
}

export {
    handleAddTaap,
    handleAddTaapApply,
    handleDelTaap,
    handleEditTaap,
    handleGetOneTaap,
    handleGetTaap,
    handleGetTaapUser
}
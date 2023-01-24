import { call, put } from 'redux-saga/effects'
import JopoApi from '../../api/JopoApi'
import {
    GetJopoSuccess, GetJopoFailed, AddJopoSuccess, AddJopoFailed
    , DelJopoSuccess, DelJopoFailed, GetOneJopoSuccess, GetOneJopoFailed
    , EditJopoSuccess, EditJopoFailed
} from '../Action/JopoAction'

function* handleGetJopo() {
    try {
        const result = yield call(JopoApi.getAll)
        yield put(GetJopoSuccess(result.data))
    } catch (error) {
        yield put(GetJopoFailed(error))
    }
}

function* handleGetOneJopo(action) {
    const { payload } = action
    try {
        const result = yield call(JopoApi.getOne, payload)
        yield put(GetOneJopoSuccess(result))
    } catch (error) {
        yield put(GetOneJopoFailed(error))
    }
}

function* handleDelJopo(action) {
    const { payload } = action
    try {
        const result = yield call(JopoApi.Delete, payload)
        yield put(DelJopoSuccess(result.data))
    } catch (error) {
        yield put(DelJopoFailed(error))
    }
}

function* handleAddJopo(action) {
    const { payload } = action
    try {
        const result = yield call(JopoApi.create, payload)
        yield put(AddJopoSuccess(result.data))
    } catch (error) {
        yield put(AddJopoFailed(error))
    }
}

function* handleEditJopo(action) {
    const { payload } = action
    try {
        const result = yield call(JopoApi.update, payload)
        yield put(EditJopoSuccess(result.data))
    } catch (error) {
        yield put(EditJopoFailed(error))
    }
}

export {
    handleAddJopo,
    handleDelJopo,
    handleEditJopo,
    handleGetOneJopo,
    handleGetJopo
}
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getCurriculumsFal,
  getCurriculumsSuc,
  removeCurriculumFal,
  removeCurriculumSuc,
} from '../Action/curriculumAction';

const getCurriculums = () => {
  const req = axios.get('http://localhost:3003/curriculums');
  return req;
};

const removeCurriculum = (id) => {
  const req = axios.delete(`http://localhost:3003/curriculums/${id}`);
  return req;
};

export function* handlerGetCurriculum() {
  try {
    const curriculums = yield call(getCurriculums);
    yield put(getCurriculumsSuc(curriculums.data));
  } catch (error) {
    yield put(getCurriculumsFal(error));
  }
}

export function* handlerRemoveCurriculum(action) {
  try {
    const { payload } = action;
    const remCurriculum = yield call(removeCurriculum, payload);
    yield put(removeCurriculumSuc(remCurriculum.data));
  } catch (error) {
    yield put(removeCurriculumFal(error.message));
  }
}

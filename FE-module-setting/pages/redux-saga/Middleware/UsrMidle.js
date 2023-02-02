import { call, put } from 'redux-saga/effects';
import { signin, signup, profile } from '../../api/UserApi';
import {
  doAddSignupFailed,
  doAddSignupSuccess,
  doGetSigninSuccess,
  doMessageNotification,
  doPushSignoutFailed,
  doPushSignoutSuccess,
} from '../Action/UsrAction';
import { setCookie, deleteCookie } from 'cookies-next';
function* handleUsrSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(signin, payload);
    if (Object.keys(result.data).length === 0) {
      yield put(
        doMessageNotification({
          message: 'user or password not match, try again',
        })
      );
    } else {
      setCookie('access_token', result.data.access_token);
      const getprofile = yield call(profile);
      setCookie('profile', JSON.stringify(getprofile.data));
      yield put(doGetSigninSuccess(getprofile.data));
    }
  } catch (error) {
    yield put(
      doMessageNotification({
        message: 'user or password not match, try again',
      })
    );
  }
}

function* handleUsrSignout(action) {
  const { payload } = action;
  try {
    deleteCookie('access_token');
    deleteCookie('profile');
    yield put(doPushSignoutSuccess(payload));
  } catch (error) {
    yield put(doPushSignoutFailed(error));
  }
}

function* handleUsrSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(signup, payload);
    yield put(doAddSignupSuccess(result.data));
  } catch (error) {
    yield put(doAddSignupFailed(error));
  }
}

export { handleUsrSignin, handleUsrSignout, handleUsrSignup };

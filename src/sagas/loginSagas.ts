import { call, put, takeLatest, fork } from 'redux-saga/effects';
import loginRequest from './requests/auth/login';
function* handleLoginAsync({ payload }: any) {
  try {
    const params = payload;
    yield call(loginRequest, params);
  } catch (error) {
    console.log(error);
  }
}
function* handleLogin() {
  yield takeLatest('auth/login', handleLoginAsync);
}
export const loginSagas = [fork(handleLogin)];

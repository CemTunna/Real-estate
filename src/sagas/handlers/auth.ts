import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '../requests/auth/auth';

function* handleLogin(action: any) {
  try {
    const isLoggedIn: boolean = yield call(login, action.payload);
    yield put({ type: 'auth/logIn', isLoggedIn });
  } catch (error) {
    // yield put({ type: 'user/getUserFailed', message: error.message });
  }
}
function* watcherAuthSaga() {
  yield takeEvery('auth/authRequest', handleLogin);
}
export default watcherAuthSaga;

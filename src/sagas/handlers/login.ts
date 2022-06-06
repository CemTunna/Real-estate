import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '../requests/auth/auth';

function* handleLogin(action: any) {
  const isLoggedIn: boolean = yield call(login, action.payload);
  yield put({ type: 'auth/logIn', isLoggedIn });
}
function* watcherLoginSaga() {
  yield takeEvery('auth/loginRequest', handleLogin);
}
export default watcherLoginSaga;

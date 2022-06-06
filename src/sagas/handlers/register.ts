import { call, put, takeEvery } from 'redux-saga/effects';
import { register } from '../requests/auth/auth';

function* handleRegister(action: any) {
  const isRegistered: boolean = yield call(register, action.payload);
  yield put({ type: 'auth/register', isRegistered });
}
function* watcherRegisterSaga() {
  yield takeEvery('auth/registerRequest', handleRegister);
}
export default watcherRegisterSaga;

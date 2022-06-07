import { call, put, takeEvery } from 'redux-saga/effects';
import { forgotPassword } from '../requests/auth/auth';

function* handleForgotPassword(action: any) {
  const isForgotPassword: boolean = yield call(forgotPassword, action.payload);
  yield put({ type: 'auth/forgotPassword', isForgotPassword });
}
function* watcherForgotPasswordSaga() {
  yield takeEvery('auth/forgotPasswordRequest', handleForgotPassword);
}
export default watcherForgotPasswordSaga;

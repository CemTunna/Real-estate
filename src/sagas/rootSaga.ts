import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/login';
import watcherRegisterSaga from './handlers/register';
import watcherUpdateSaga from './handlers/update';
import watcherForgotPasswordSaga from './handlers/forgotPassword';

export default function* rootSaga() {
  yield all([
    watcherForgotPasswordSaga(),
    watcherUpdateSaga(),
    watcherLoginSaga(),
    watcherRegisterSaga(),
  ]);
}

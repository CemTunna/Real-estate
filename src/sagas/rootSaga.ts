import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/login';
import watcherRegisterSaga from './handlers/register';
import watcherUpdateSaga from './handlers/update';

export default function* rootSaga() {
  yield all([watcherUpdateSaga(), watcherLoginSaga(), watcherRegisterSaga()]);
}

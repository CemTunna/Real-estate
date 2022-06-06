import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/login';
import watcherRegisterSaga from './handlers/register';

export default function* rootSaga() {
  yield all([watcherLoginSaga(), watcherRegisterSaga()]);
}

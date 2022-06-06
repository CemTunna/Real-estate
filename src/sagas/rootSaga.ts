import { all } from 'redux-saga/effects';
import watcherAuthSaga from './handlers/auth';

export default function* rootSaga() {
  yield all([watcherAuthSaga()]);
}

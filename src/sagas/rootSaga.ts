import { all } from 'redux-saga/effects';
import { loginSagas } from './loginSagas';
export default function* rootSaga() {
  yield all([...loginSagas]);
}

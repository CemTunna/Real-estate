import { call, put, takeEvery } from 'redux-saga/effects';
import { updateAuth } from '../requests/auth/auth';

function* handleUpdate(action: any) {
  const isUpdated: boolean = yield call(updateAuth, action.payload);
  yield put({ type: 'auth/update', isUpdated });
}
function* watcherUpdateSaga() {
  yield takeEvery('auth/updateRequest', handleUpdate);
}
export default watcherUpdateSaga;

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;

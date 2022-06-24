import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import {createLogger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true,
  // diff: true,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger)),
);

sagaMiddleware.run(rootSaga);

export default store;

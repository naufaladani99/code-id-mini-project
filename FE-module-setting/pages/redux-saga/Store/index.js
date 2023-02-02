import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../Reducer';
import rootSaga from '../Middleware';

// const makeStore = context => {
//     const logger = createLogger()

//     const saga = createSagaMiddleware()

//     const store = createStore(
//         rootReducer,
//         undefined,
//         composeWithDevTools(applyMiddleware(saga, logger))
//     )
//     store.sagaTask = saga.run(rootSaga)

//     return store
// }
// const wrapper = createWrapper(makeStore)

// export default wrapper

const makeStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware, logger))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default createWrapper(makeStore);

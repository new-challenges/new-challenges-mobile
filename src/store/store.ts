import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {allReducer} from './all-reducers';
import rootSaga from './root-sagas';

//middleware
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
// if (__DEV__) {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const createDebugger = require('redux-flipper').default;
//   middleWare.push(createDebugger());
// }
const store = createStore(allReducer, applyMiddleware(...middleWare));
sagaMiddleWare.run(rootSaga);
export default store;

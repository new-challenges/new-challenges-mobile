import {all} from 'redux-saga/effects';
import {HomeSaga} from '../features/home/store/rootSaga';

export default function* rootSaga() {
  yield all([
    HomeSaga(),
  ]);
}

import {takeLatest} from 'redux-saga/effects';
import { AppType } from '../../../store/app-redux/actionType';
import * as Saga from './workerSagas';

export function* HomeSaga() {
  yield takeLatest(AppType.GET_USER_INFO.HANDLER, Saga.getUserInfo);
}

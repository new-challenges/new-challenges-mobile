import {Action} from 'redux';
import {call} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
export function* getUserInfo(action: any) {
  console.log('getUserInfo', action);
  try {
    const { payload, success, failure} = action;
    // const data: AxiosResponse = yield call(LoyaltyHelper.UserApi.getUserInfo);
    console.log(payload);
    success('data');
  } catch (e) {}
}

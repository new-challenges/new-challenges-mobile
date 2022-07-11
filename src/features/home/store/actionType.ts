import {asyncTypes} from '../../../common';
import {AppType} from '../../../store/app-redux/actionType';

export const getUserInfoHandle = (
  payload: any,
  success: (data: any) => void,
  failure: (error: any) => void,
) => ({
  type: AppType.GET_USER_INFO.HANDLER,
  payload,
  success,
  failure,
});
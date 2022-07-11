import {AppState} from './type';
import {AppType} from './actionType';

const initialAppState: AppState = {
  token: '',
};

const appReducer = (
  state = {...initialAppState},
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case AppType.GET_USER_INFO.SUCCESS: {
      return {...state, token: action.payload};
    }
    default:
      return state;
  }
};
export default appReducer;

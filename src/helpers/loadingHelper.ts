import store from '../store/store';
import {AppType} from '../store/app-redux/actionType';
const setLoadingApp = (payload: boolean) => ({
  type: AppType.SET_LOADING_APP.HANDLER,
  payload,
});
export class LoadingHelper {
  static show() {
    store.dispatch(setLoadingApp(true));
  }
  static hide() {
    store.dispatch(setLoadingApp(false));
  }
}

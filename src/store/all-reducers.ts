import {combineReducers} from 'redux';
import appReducer from './app-redux/reducer';

export const allReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof allReducer>;

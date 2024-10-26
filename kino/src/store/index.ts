import { ActionReducerMap } from '@ngrx/store';
import { appReducer, AppState } from './app.reducer';

export interface AppState1 {
  app: AppState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
};

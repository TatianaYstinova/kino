import { ActionReducerMap } from '@ngrx/store';
import { appReducer, AppState } from './app.reducer';


export interface RootState {
  app: AppState;
  // другие состояния...
}

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer,
  // другие редьюсеры...
};
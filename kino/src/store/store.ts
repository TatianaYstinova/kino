import { ActionReducerMap } from '@ngrx/store';
import { RootStateWithAppState, appReducer } from './app.reducer';

export interface RootState extends RootStateWithAppState{}

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer,
  // другие редьюсеры...
};
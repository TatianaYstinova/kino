import { ActionReducerMap } from '@ngrx/store';
import { RootStateWithAppState, appReducer } from './app.reducer';
import { homePageReducer, RootStateWithHomePageState } from './home-page.reducers';

export interface RootState extends
  RootStateWithAppState,
  RootStateWithHomePageState { }

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer,
  homePage: homePageReducer,
  // другие редьюсеры...
};
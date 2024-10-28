import { createSelector } from '@ngrx/store';
import { RootStateWithAppState, AppState } from './app.reducer';
import { HomePageState, RootStateWithHomePageState } from './home-page.reducers';

export const selectAppState = (state: RootStateWithAppState) => state.app;

export const selectIsAuthorized = createSelector(
  selectAppState,
  (state: AppState) => state.isAuthorized
);


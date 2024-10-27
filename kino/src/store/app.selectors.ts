import { createSelector } from '@ngrx/store';
import { RootStateWithAppState, AppState } from './app.reducer';


export const selectAppState = (state: RootStateWithAppState) => state.app;

export const selectIsAuthorized = createSelector(
  selectAppState,
  (state: AppState) => state.isAuthorized
);

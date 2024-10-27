import { createReducer, on } from '@ngrx/store';
import { setIsAuthorizing, setIsAuthorized } from './app.actions';

export interface AppState {
  isAuthorized: boolean;
  isAuthorizing: boolean;
}

export const initialState: AppState = {
  isAuthorized: false,
  isAuthorizing: false,
};


export const appReducer = createReducer(
  initialState,
  on(setIsAuthorizing, (state, { isAuthorizing }) => ({
    ...state,
    isAuthorizing,
  })),
  on(setIsAuthorized, (state, { isAuthorized }) => ({
    ...state,
    isAuthorized,
  }))
);



export interface RootStateWithAppState {
  app: AppState;
}



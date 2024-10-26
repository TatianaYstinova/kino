import { createAction, props } from '@ngrx/store';


export const setIsAuthorizing = createAction(
  '[App] Set Is Authorizing',
  props<{ isAuthorizing: boolean }>()
);

export const setIsAuthorized = createAction(
  '[App] Set Is Authorized',
  props<{isAuthorized: boolean}>()
);
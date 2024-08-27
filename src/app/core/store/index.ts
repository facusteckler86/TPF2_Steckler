import { ActionReducerMap } from '@ngrx/store';
import { authFeatureName, authReducer, AuthState } from './auth/auth.reducers';

export interface RootState {
  [authFeatureName]: AuthState;
}

 export const rootReducer: ActionReducerMap<RootState> = {
   [authFeatureName]: authReducer,
};

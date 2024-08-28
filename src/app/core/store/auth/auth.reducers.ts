import { createReducer, on } from '@ngrx/store';

import { setAuthUser, unsetAuthUser } from './auth.actions';
import { User } from '../../../features/dashboard/courses/models';

export const authFeatureName = 'auth';

export interface AuthState {
  authUser: User | null;
}

const initialState: AuthState = {
  authUser: null,
};

export const authReducer = createReducer(
  initialState,
  on(setAuthUser, (state, action) => {
    return {
      ...state,
      authUser: action.payload,
    };
  }),
  on(unsetAuthUser, () => initialState)
);

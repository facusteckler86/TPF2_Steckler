import { createAction, props } from '@ngrx/store';
import { User } from '../../../features/dashboard/courses/models';

export const setAuthUser = createAction(
  '[Auth] set auth user',
  props<{ payload: User }>()
);

export const unsetAuthUser = createAction('[Auth] unset auth user');

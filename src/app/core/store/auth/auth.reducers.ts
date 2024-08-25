import { createReducer, on } from "@ngrx/store";
import { User } from "../../../features/dashboard/courses/models";
import { setAuthUser, unsetAuthUser } from "./auth.actions";
import { Action } from "rxjs/internal/scheduler/Action";

export const authFeatureName = 'auth'

export interface AuthState{
  authUser: User | null;
}

const initialState: AuthState = {
  authUser: null
}
export const authReducer = createReducer(initialState,
  on(setAuthUser, (state)=>{
    return{
      ...state,
      authUser: action.payload,
    }
  }),
  on(unsetAuthUser,()=> initialState)
)

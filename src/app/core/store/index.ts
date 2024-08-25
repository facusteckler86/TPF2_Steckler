import { ActionReducerMap } from "@ngrx/store";
import { authFeatureName, authReducer, AuthState } from "./auth/auth.reducers";

export const rootReducer: ActionReducerMap<RootState> = {
  [authFeatureName]: authReducer,
}

export interface RootState{
  [authFeatureName] : AuthState;
}




import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureName, AuthState } from "./auth.reducers";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureName)

export const selectAuthUser = createSelector(selectAuthState, (state)=>state.authUser);

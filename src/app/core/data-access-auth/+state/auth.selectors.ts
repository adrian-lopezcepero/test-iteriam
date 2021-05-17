import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authsFeatureKey, AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>(authsFeatureKey);

export const getAuthLoaded = createSelector(getAuthState, (state: AuthState) => state?.loaded);

export const getIsLogged = createSelector(getAuthState, (state: AuthState) => state?.logged);

export const getToken = createSelector(getAuthState, (state: AuthState) => state?.token);

export const getErrors = createSelector(getAuthState, (state: AuthState) => state?.errors);

export const getUser = createSelector(getAuthState, (state: AuthState) => state?.user);


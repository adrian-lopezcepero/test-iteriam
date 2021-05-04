import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authsFeatureKey, State, AuthPartialState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthPartialState, State>(authsFeatureKey);

export const getAuthLoaded = createSelector(getAuthState, (state: State) => state.loaded);

export const getAuthError = createSelector(getAuthState, (state: State) => state.error);

export const getIsLogged = createSelector(getAuthState, (state: State) => state.logged);

export const getToken = createSelector(getAuthState, (state: State) => state.token);

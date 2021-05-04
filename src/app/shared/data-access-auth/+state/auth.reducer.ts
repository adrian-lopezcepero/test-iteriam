import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Auth } from './auth.model';
import * as AuthActions from './auth.actions';

export const authsFeatureKey = 'auth';

export interface State {
  loading: boolean;
  logged: boolean;
  error?: string;
  token?: string;
}

export interface AuthPartialState {
  readonly [authsFeatureKey]: State;
}

export const initialState: State = {
  loading: false,
  logged: false,
};


export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginUser, (state) => ({ ...state, loading: true })
  ),
  on(AuthActions.loginUserSuccess, (state, action) => ({ ...state, loading: false, logged: true, token: action.loginResponse.token })),
  on(AuthActions.loginUserFailure, (state, action) => ({ ...state, loading: false, logged: false, error: action.error }))
);

const reducer = (state: State | undefined, action: Action) => (authReducer(state, action));

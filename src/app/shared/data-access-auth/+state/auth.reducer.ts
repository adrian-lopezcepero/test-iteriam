import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authsFeatureKey = 'auth';

export interface AuthState {
  loaded: boolean | null;
  logged: boolean;
  token?: string;
  errors: string[];
}


export const initialState: AuthState = {
  loaded: null,
  logged: false,
  errors: []
};


export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginUser, (state) => ({ ...state, loaded: false })
  ),
  on(AuthActions.loginUserSuccess, (state, action) => ({
    ...state,
    loaded: true,
    logged: true,
    token: action.loginResponse.token,
    errors: []
  })),
  on(AuthActions.loginUserFailure, (state, action) => ({
    ...state,
    loaded: true,
    logged: false,
    errors: [action.error]
  })),

  on(AuthActions.loginValidationErrors, (state, action) => ({ ...state, errors: action.errors }))
);

const reducer = (state: AuthState | undefined, action: Action) => (authReducer(state, action));

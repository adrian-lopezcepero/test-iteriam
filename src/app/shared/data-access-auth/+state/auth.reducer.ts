import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../util';
import * as AuthActions from './auth.actions';

export const authsFeatureKey = 'auth';

export interface AuthState {
  loaded: boolean | null;
  logged: boolean;
  token?: string;
  user?: User;
  errors: string[];
}


export const initialState: AuthState = {
  loaded: null,
  logged: false,
  errors: []
};


export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginUser, (state) => ({ ...state, loaded: false, logged: false })
  ),
  on(AuthActions.loginUserSuccess, (state, action) => ({
    ...state,
    loaded: true,
    logged: true,
    token: action.loginResponse.token,
    user: { email: action.loginResponse.email },
    errors: []
  })),
  on(AuthActions.loginUserFailure, (state, action) => ({
    ...state,
    loaded: true,
    logged: false,
    errors: [action.error]
  })),
  on(AuthActions.loginValidationErrors, (state, action) => ({ ...state, errors: action.errors })),

  on(AuthActions.logOut, (state, action) => ({...initialState}))
);

export const reducer = (state: AuthState | undefined, action: Action) => (authReducer(state, action));

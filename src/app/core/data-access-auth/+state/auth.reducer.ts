import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { User } from '../../../shared/util';
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


export const authReducer: ActionReducer<AuthState, any> = createReducer(
  initialState,
  on(AuthActions.loginUser, (state: AuthState) => ({ ...state, loaded: false, logged: false })
  ),
  on(AuthActions.loginUserSuccess, (state: AuthState, action: ReturnType<typeof AuthActions.loginUserSuccess>) => ({
    ...state,
    loaded: true,
    logged: true,
    token: action.loginResponse.token,
    user: { email: action.loginResponse.email },
    errors: []
  })),
  on(AuthActions.loginUserFailure, (state: AuthState, action: ReturnType<typeof AuthActions.loginUserFailure>) => ({
    ...state,
    loaded: true,
    logged: false,
    errors: [action.error]
  })),
  on(AuthActions.loginValidationErrors,
    (state: AuthState, action: ReturnType<typeof AuthActions.loginValidationErrors>) => ({ ...state, errors: action.errors })),

  on(AuthActions.logOut, (state: AuthState, action: ReturnType<typeof AuthActions.logOut>) => ({ ...initialState }))
);

export const reducer = (state: AuthState | undefined, action: Action): AuthState => (authReducer(state, action));

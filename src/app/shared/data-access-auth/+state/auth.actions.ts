import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../models/login-response.model';

export const loginUser = createAction('[Auth/API] Login User', props<{ username: string; password: string }>());
export const loginUserSuccess = createAction('[Auth/API] Login User Success', props<{ loginResponse: LoginResponse }>());
export const loginUserFailure = createAction('[Auth/API] Login User Failure', props<{ error: string }>());

export const loginValidationErrors = createAction('[Auth/API] Login Validation Errors', props<{ errors: string[] }>());

export const logOut = createAction('[Auth/API] Logout User');

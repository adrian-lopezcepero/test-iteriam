import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Auth } from './auth.model';
import { LoginResponse } from '../models/login-response.model';

export const loginUser = createAction('[Auth/API] Login User', props<{ username: string; password: string }>());
export const loginUserSuccess = createAction('[Auth/API] Login User Success', props<{ loginResponse: LoginResponse }>());
export const loginUserFailure = createAction('[Auth/API] Login User Failure', props<{ error: string }>());


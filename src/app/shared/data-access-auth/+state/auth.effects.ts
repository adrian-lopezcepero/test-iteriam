import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import * as AuthActions from './auth.actions';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      exhaustMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((loginResponse) =>
            AuthActions.loginUserSuccess({ loginResponse })
          ),
          catchError((error) => of(AuthActions.loginUserFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) { }

}

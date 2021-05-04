import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
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
          catchError((error) => of(AuthActions.loginUserFailure({
            error: this.translate.instant('ERROR.BAD_CREDENTIALS')
          })))
        )
      )
    )
  );

  navigateHome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUserSuccess),
      tap(() => { this.router.navigateByUrl('home', { replaceUrl: true }); })
    ),
    {
      dispatch: false
    }
  );

  constructor(
    private actions$: Actions, 
    private authService: AuthService, 
    private router: Router,
    private translate: TranslateService) { }

}

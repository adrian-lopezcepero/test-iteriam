import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';
import { HomePage } from 'src/app/home/home.page';
import { LoginPage } from 'src/app/login/login.page';
import { AuthService } from '../service/auth.service';

import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';
import { LoginResponse } from '../models/login-response.model';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
  const loginSuccessfulResponse = {
    email: 'test@iteriam.com',
    token: 'validToken'
  };
  const loginFailureResponse = {
    error: 'ERROR.BAD_CREDENTIALS'
  };
  let actions$: Observable<any>;
  let effects: AuthEffects;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(
        [{ path: 'login', component: LoginPage }, { path: 'home', component: HomePage }]
      ),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader,
        }
      }),
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useValue: {
            login: (): Observable<LoginResponse> => (of(loginSuccessfulResponse))
          }
        }
      ]
    });

    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('Should throw login sucess action', (done) => {
    spyOn(authService, 'login').and.callThrough();

    actions$ = of(AuthActions.loginUser({
      username: 'test@iteriam.com',
      password: '123456'
    }));

    effects.login$.subscribe((result) => {
      expect(result).toEqual(AuthActions.loginUserSuccess({ loginResponse: loginSuccessfulResponse }));
      done();
    });
  });

  it('Should throw login failure action', (done) => {

    spyOn(authService, 'login').and.callFake(() => throwError(''));

    actions$ = of(AuthActions.loginUser({
      username: 'testiteriam.com',
      password: '123456'
    }));

    effects.login$.subscribe((result) => {
      expect(result).toEqual(AuthActions.loginUserFailure({ error: loginFailureResponse.error }));
      done();
    });
  });

  it('Should navigate to home on login success', (done) => {
    const spy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));

    actions$ = of(AuthActions.loginUserSuccess({
      loginResponse: loginSuccessfulResponse
    }));

    effects.navigateHome$.subscribe((result) => {
      expect(router.navigateByUrl).toHaveBeenCalled();
      expect(router.navigateByUrl).toHaveBeenCalledOnceWith('home', { replaceUrl: true });
      done();
    });
  });

  it('Should navigate to login on logout', (done) => {
    const spy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));

    actions$ = of(AuthActions.logOut());

    effects.navigateLogin$.subscribe((result) => {
      expect(router.navigateByUrl).toHaveBeenCalled();
      expect(router.navigateByUrl).toHaveBeenCalledOnceWith('login', { replaceUrl: true });
      done();
    });
  });


});

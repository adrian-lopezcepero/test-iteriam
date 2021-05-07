import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from '../data-access-auth/service/auth.service';

import { AuthGuard } from './auth.guard';
import { AuthApiInterface } from '../data-access-auth/service/auth-api.interface';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthFacade } from '../data-access-auth/+state/auth.facade';
import * as AuthSelectors from '../data-access-auth/+state/auth.selectors';

describe('AuthGuard', () => {
  let authService: AuthService;
  let guard: AuthGuard;
  let store: MockStore;


  it('should return false if the user state is not logged in', async (done) => {
    setup(false);
    guard.canActivate().subscribe((canActivate) => {
      expect(canActivate).toBeFalsy();
      done();
    });
  });


  it('should return true if the user state is logged in', async (done) => {
    setup(true);
    guard.canActivate().subscribe((canActivate) => {
      expect(canActivate).toBeTruthy();
      done();
    });
  });

  const setup = (logged: boolean): void => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthFacade,
        provideMockStore({
          initialState: { errors: [], loaded: false, logged: false },
          selectors: [
            { selector: AuthSelectors.getAuthLoaded, value: false },
          ]
        }),
        { provide: AuthApiInterface, useValue: {} }
      ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'login', redirectTo: '' }]),
        HttpClientTestingModule],
    });

    store = TestBed.inject(MockStore);
    authService = TestBed.inject(AuthService);
    guard = TestBed.inject(AuthGuard);
  };
});



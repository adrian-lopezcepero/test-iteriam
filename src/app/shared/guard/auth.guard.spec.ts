import { getTestBed, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from '../data-access-auth/service/auth.service';

import { AuthGuard } from './auth.guard';
import { AuthApiInterface } from '../data-access-auth/service/auth-api.interface';

describe('AuthGuard', () => {
  let injector: TestBed;
  let authService: AuthService;
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthApiInterface, useValue: {} }
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    injector = getTestBed();
    authService = injector.inject(AuthService);
    guard = injector.inject(AuthGuard);
  });
});

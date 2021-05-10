import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { AuthApiInterface } from './auth-api.interface';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  const validEmail = 'test@iteriam.com';
  const validToken = 'validToken';
  let service: AuthService;
  let authApi: AuthApiInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthApiInterface,
          useValue: {
            login: (): Observable<LoginResponse> => (of({ email: validEmail, token: validToken })),
            logout: () => { }
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    authApi = TestBed.inject(AuthApiInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call authapi with email and login provided', () => {
    const email = 'test@email.com';
    const password = 'password';

    const spy = spyOn(authApi, 'login');

    service.login(email, password);

    expect(spy).toHaveBeenCalledOnceWith(email, password);

  });

  it('should respond with valid login response', async (done) => {
    spyOn(authApi, 'login').and.callFake((email, password) => of({
      email: validEmail, token: validToken
    }));

    service.login(validEmail, '123456').subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.email).toBe(validEmail);
      done();
    });

  });

  it('should respond with invalid login response', () => {
    spyOn(authApi, 'login').and.callFake((email, password) => (throwError('error')));

    service.login(validEmail, '12345');

    service.login(validEmail, '123456').subscribe(() => { },
      error => {
        expect(error).toBe('error');
      }
    );
  });



});

import { TestBed } from '@angular/core/testing';
import { AuthApiInterface } from './auth-api.interface';

import { AuthService } from './auth.service';

describe('AuthService unit test', () => {
  let service: AuthService;
  let authApi: AuthApiInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthApiInterface,
          useValue: {
            login: () => { },
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

});

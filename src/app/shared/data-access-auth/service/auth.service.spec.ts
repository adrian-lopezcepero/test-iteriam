import { TestBed } from '@angular/core/testing';
import { AuthApiInterface } from './auth-api.interface';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, first, takeLast } from 'rxjs/operators';
import { User } from '../../util';
import { LoginResponse } from '../models/login-response.model';
import { AuthApiInterface } from './auth-api.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authApi: AuthApiInterface) { }

  public login(email: string, password: string): Observable<LoginResponse> {
    return this.authApi.login(email, password);
  }

}

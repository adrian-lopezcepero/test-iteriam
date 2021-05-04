import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../util';
import { LoginResponse } from '../models/login-response.model';

@Injectable()
export abstract class AuthApiInterface {
    public abstract login(email: string, password: string): Observable<LoginResponse>;
    public abstract logout(user: User): Observable<boolean>;
}

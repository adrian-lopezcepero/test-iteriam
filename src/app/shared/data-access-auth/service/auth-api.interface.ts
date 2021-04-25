import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../util';

@Injectable()
export abstract class AuthApiInterface {
    public abstract login(email: string, password: string): Observable<User>;
    public abstract logout(user: User): Observable<boolean>;
}

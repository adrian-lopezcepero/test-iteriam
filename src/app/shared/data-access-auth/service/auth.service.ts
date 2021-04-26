import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../../util';
import { AuthApiInterface } from './auth-api.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$ = new BehaviorSubject<User>(null);
  isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private authApi: AuthApiInterface) { }

  public login(email: string, password: string): void {
    this.authApi.login(email, password).pipe(
      first()
    ).subscribe(
      (user) => {
        this.isLogged$.next(true);
        this.user$.next(user);
      },
      error => console.log(error)
      );
  }
}

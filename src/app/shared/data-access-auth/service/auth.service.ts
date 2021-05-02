import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, first, takeLast } from 'rxjs/operators';
import { User } from '../../util';
import { AuthApiInterface } from './auth-api.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject<boolean>(false);
  logged$ = this.isLogged.asObservable();
  isLoading = new BehaviorSubject<boolean>(false);
  loading$ = this.isLoading.asObservable();

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private authApi: AuthApiInterface) { }

  public login(email: string, password: string): void {
    this.isLoading.next(true);
    this.authApi.login(email, password).pipe(
      finalize(() => this.isLoading.next(false))
    ).subscribe(
      (user) => {
        this.isLogged.next(true);
        this.userSubject.next(user);
      },
      () => {
        this.isLogged.next(false);
      }
    );
  }

  logout() {
    this.isLogged.next(false);
    this.userSubject.next(null);
  }

  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

}

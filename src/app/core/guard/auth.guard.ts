import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthFacade } from '../data-access-auth/+state/auth.facade';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authFacade: AuthFacade, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authFacade.isLogged$.pipe(
      tap((isLoggued) => isLoggued || this.router.navigateByUrl('login')),
      take(1)
    );
  }
}

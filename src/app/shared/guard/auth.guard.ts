import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../data-access-auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.logged$.pipe(
      tap((logged: boolean) => {
        if (!logged) {
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}

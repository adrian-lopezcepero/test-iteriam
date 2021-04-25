import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, switchMapTo, tap } from 'rxjs/operators';

import { AuthService } from '../data-access-auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.authService.isLogged$.pipe(
      tap((logged: boolean) => {
        if (!logged) {
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}

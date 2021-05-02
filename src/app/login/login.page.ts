import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { untilDestroyed, User } from '../shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit, OnDestroy {


  errors: string[];
  loading$ = this.authService.loading$;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }

  login(user: User): void {
    this.authService.login(user.email, user.password);
    this.authService.logged$.pipe(
      untilDestroyed(this),
    )
      .subscribe(

        (logged: boolean) => {
          if (logged) {
            this.errors = [];
            this.router.navigateByUrl('home', {
              replaceUrl: true
            });
          } else {
            this.errors = ['Usuario o password incorrecto'];
          }
        }
      );
  }

  onErrors(errors: string[]): void {
    this.errors = errors;
  }

}

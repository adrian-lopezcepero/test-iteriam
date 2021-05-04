import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';

import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { untilDestroyed, User } from '../shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit, OnDestroy {


  errors$ = this.authFacade.errors$;
  loaded$ = this.authFacade.loaded$;

  constructor(private authFacade: AuthFacade, private router: Router) { }

  ngOnInit() { }

  ngOnDestroy(): void { }

  login(user: User): void {
    this.authFacade.login(user.email, user.password);
  }

  onErrors(errors: string[]): void {
    this.authFacade.loginErrors(errors);
  }

}

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthFacade } from '../../shared/data-access-auth/+state/auth.facade';
import { User } from '../../shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnDestroy {


  errors$ = this.authFacade.errors$;
  loaded$ = this.authFacade.loaded$;

  constructor(private authFacade: AuthFacade) { }

  ngOnDestroy(): void { }

  login(user: User): void {
    this.authFacade.login(user.email, user.password);
  }

  onErrors(errors: string[]): void {
    this.authFacade.loginErrors(errors);
  }

}

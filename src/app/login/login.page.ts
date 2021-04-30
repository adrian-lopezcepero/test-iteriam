import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';

import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { FormError, User } from '../shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user: User): void {
    this.authService.login(user.email, user.password);
    this.authService.isLogged$.pipe(filter(Boolean), first()).subscribe(() => this.router.navigateByUrl('home'));
  }

  errors(errors: FormError[]): void {
  }

}

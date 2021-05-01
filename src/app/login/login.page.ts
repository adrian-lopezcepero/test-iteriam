import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, filter, first } from 'rxjs/operators';

import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { User } from '../shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {


  errors: string[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user: User): void {
    this.errors = [];
    this.authService.login(user.email, user.password);
    this.authService.isLogged$.pipe(
      first())
      .subscribe(
        (logged: boolean) => {
          if (logged) {
            this.router.navigateByUrl('home');
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

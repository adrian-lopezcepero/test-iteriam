import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { AuthService } from '../shared/data-access-auth/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        email: [''],
        password: ['']
      }
    );
  }

  ngOnInit() {
  }

  private login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    this.authService.isLogged$.pipe(filter(Boolean), first()).subscribe(() => this.router.navigateByUrl('home'));
  }

}

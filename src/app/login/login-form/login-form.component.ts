import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { reduce, tap } from 'rxjs/operators';

import { FormError, formErrors } from 'src/app/shared/util';
import { User } from 'src/app/shared/util/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Output() login = new EventEmitter<User>();
  @Output() formErrors = new EventEmitter<FormError[]>();

  loginForm: FormGroup;
  emailValid = true;
  passwordValid = true;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email.bind(Validators.email)]],
        password: ['', [Validators.required, Validators.maxLength(6)]],
        rememberMe: [false]
      }
    );
  }

  ngOnInit(): void {
    this.loginForm.statusChanges.pipe(
      tap(console.log)
    ).subscribe();
  }

  public get email(): FormControl {
    return this.loginForm.controls.email as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }


  submit(): void {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
    } else {
      const errors = formErrors(this.loginForm);
      this.emailValid = !errors.map(error => error.controlName).includes('email');
      this.passwordValid = !errors.map(error => error.controlName).includes('password');
      this.formErrors.emit(errors);
    }
  }
}

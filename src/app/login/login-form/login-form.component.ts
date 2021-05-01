import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { reduce } from 'rxjs/operators';

import { formErrors } from 'src/app/shared/util';
import { User } from 'src/app/shared/util/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Output() login = new EventEmitter<User>();
  @Output() errors = new EventEmitter<string[]>();

  loginForm: FormGroup;
  emailValid = true;
  passwordValid = true;
  errorValidations: { controlName: string; validator: string; errorMessage: string; }[];

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false]
      }
    );
  }

  ngOnInit(): void {
    this.errorValidations = [
      { controlName: 'email', validator: 'required', errorMessage: 'El email es obligatorio' },
      { controlName: 'email', validator: 'email', errorMessage: 'El formato del email no es correcto' },
      { controlName: 'password', validator: 'required', errorMessage: 'El password es obligatorio' },
      { controlName: 'password', validator: 'minlength', errorMessage: 'El password debe ser mayor de 5 caracteres' }
    ];
  }

  public get email(): FormControl {
    return this.loginForm.controls.email as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }



  submit(): void {
    const errors = formErrors(this.loginForm);
    this.emailValid = !errors?.map(error => error.controlName).includes('email');
    this.passwordValid = !errors?.map(error => error.controlName).includes('password');
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
    } else {
      console.log(errors);

      const errorMessages = this.errorValidations
        .filter(e => errors.find(error => error.controlName === e.controlName
          && Object.keys(error.errors || '').includes(e.validator)))
          .map(e => e.errorMessage);
      this.errors.emit(errorMessages);
    }
  }

  reducer = (accumulator, currentValue) => accumulator + currentValue;
}

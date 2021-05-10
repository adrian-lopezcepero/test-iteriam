import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { formErrors } from 'src/app/shared/util';
import { emailRegex } from 'src/app/shared/util/validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Input() loading = false;
  @Output() login = new EventEmitter<{ email: string; password: string; rememberMe: boolean}>();
  @Output() errors = new EventEmitter<string[]>();

  loginForm: FormGroup;
  emailValid = true;
  passwordValid = true;
  errorValidations: { controlName: string; validator: string; errorMessage: string }[];

  constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(emailRegex)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false]
      }
    );
  }

  ngOnInit(): void {
    this.errorValidations = [
      {
        controlName: 'email', validator: 'required',
        errorMessage: this.translate.instant('ERROR.REQUIRED', { controlName: 'email' })
      },
      {
        controlName: 'email', validator: 'pattern',
        errorMessage: this.translate.instant('ERROR.EMAIL')
      },
      {
        controlName: 'password', validator: 'required',
        errorMessage: this.translate.instant('ERROR.REQUIRED', { controlName: 'contraseña' })
      },
      {
        controlName: 'password', validator: 'minlength',
        errorMessage: this.translate.instant('ERROR.MIN_LENGTH', { controlName: 'contraseña', length: 5 })
      }
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
      const errorMessages = this.errorValidations
        .filter(e => errors.find(error => error.controlName === e.controlName
          && Object.keys(error.errors || '').includes(e.validator)))
        .map(e => e.errorMessage);
      this.errors.emit(errorMessages);
    }
  }
}

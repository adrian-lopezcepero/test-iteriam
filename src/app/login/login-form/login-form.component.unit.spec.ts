import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let email: FormControl;
  let password: FormControl;

  beforeEach(() => {
    component = new LoginFormComponent(new FormBuilder(), null);
    component.errorValidations = [
      { controlName: 'email', validator: 'required', errorMessage: 'es obligatorio' },
      { controlName: 'email', validator: 'pattern', errorMessage: 'El formato del email no es correcto' },
      { controlName: 'password', validator: 'minlength', errorMessage: 'debe ser mayor de 5 caracteres' }
    ];
    email = component.email;
    password = component.password;
  });

  it('should create a form with 2 controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
    expect(component.loginForm.contains('rememberMe')).toBeTruthy();
  });

  it('should make the email and password required', () => {

    email.setValue('');
    password.setValue('');

    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should make the email invalid format', () => {

    email.setValue('invalidemal@');

    expect(email.valid).toBeFalsy();
  });

  it('should make the password invalid length', () => {

    password.setValue('1234');

    expect(password.valid).toBeFalsy();
  });

  it('should raise validation errors when form is submitted', () => {
    email.setValue('');
    password.setValue('');
    let errors = null;

    component.errors.subscribe((
      e => errors = e
    ));

    component.submit();

    expect(component.loginForm.valid).toBeFalsy();
    expect(errors).toContain('es obligatorio');
  });

  it('should raise validation email and password when submitted', () => {
    email.setValue('test@iteriam.com');
    password.setValue('123456');
    let login = null;

    component.login.subscribe((
      data => login = data
    ));

    component.submit();

    expect(component.loginForm.valid).toBeTruthy();
    expect(JSON.stringify(login)).toContain('email');
    expect(JSON.stringify(login)).toContain('password');
    expect(JSON.stringify(login)).toContain('rememberMe');
  });

});


import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore, getMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { userInfo } from 'node:os';
import { EMPTY, Observable } from 'rxjs';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthState } from '../shared/data-access-auth/+state/auth.reducer';
import * as AuthSelectors from '../shared/data-access-auth/+state/auth.selectors';
import { User } from '../shared/util';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let facade: AuthFacade;
  // const facade: AuthFacade = { errors$: EMPTY, loaded$: EMPTY, login: () => { }, logOut: () => { }, loginErrors: () => { } };

  beforeEach(() => {
    facade = new AuthFacade(getMockStore({}));
    component = new LoginPage(facade);
  });

  it('should login user', () => {
    const user: User = { email: 'test@iteriam.com', password: '123456' };

    let logged: User = null;
    spyOn(facade, 'login').and.callFake((email, password) => {
      logged = { email, password };
    });

    component.login(user);

    expect(logged.email).toBe(user.email);
    expect(logged.password).toBe(user.password);

  });

  it('should show login errors', () => {
    const errorMessage = 'Usuario y o password incorrecto';
    const formErrors = [errorMessage];

    let errors = [];
    spyOn(facade, 'loginErrors').and.callFake((e) => {
      errors = e;
    });

    component.onErrors(formErrors);

    expect(errors).toContain(errorMessage);

  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { from } from 'rxjs';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthState } from '../shared/data-access-auth/+state/auth.reducer';
import * as AuthSelectors from '../shared/data-access-auth/+state/auth.selectors';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const initialState: AuthState = { loaded: null, logged: false, errors: [] };
  let facade: AuthFacade;

  it('should create', () => {
    setup(initialState);
    expect(component).toBeTruthy();
  });


  const setup = (stateConfig: AuthState = initialState) => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader
        }
      }),
      ],
      providers: [
        provideMockStore({
          initialState: stateConfig, selectors: [
            { selector: AuthSelectors.getAuthLoaded, value: stateConfig.loaded },
            { selector: AuthSelectors.getErrors, value: stateConfig.errors },
          ]
        }),
        AuthFacade
      ]
    });

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    facade = TestBed.inject(AuthFacade);
  };

});

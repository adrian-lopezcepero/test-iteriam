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


  beforeEach(() => {
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
          initialState, selectors: [
            { selector: AuthSelectors.getAuthLoaded, value: true },
            { selector: AuthSelectors.getErrors, value: [] },
          ]
        }),
        AuthFacade
      ]
    });

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toast errors on login errors', async () => {
    const errorMessage = 'Usuario o password incorrecto';
    const errors = [errorMessage];
    component.errors$.subscribe(() => from(errors));

    const toast = fixture.debugElement.query(By.css('.error-toast')).nativeElement.value;
    
    const form = fixture.debugElement.query(By.css('.login-form'));
    form.triggerEventHandler('errors', errors);

    fixture.whenStable().then(()=> {
      expect(JSON.stringify(toast)).toContain(errorMessage);
    });


  });


});

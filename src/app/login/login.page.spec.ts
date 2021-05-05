import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthState } from '../shared/data-access-auth/+state/auth.reducer';
import * as AuthSelectors from '../shared/data-access-auth/+state/auth.selectors';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const initialState: AuthState = { loaded: null, logged: false, errors: [] };


  beforeEach(waitForAsync(() => {
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
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

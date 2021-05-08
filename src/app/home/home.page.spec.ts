import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthState } from '../shared/data-access-auth/+state/auth.reducer';


import { HomePage } from './home.page';
import * as AuthSelectors from '../shared/data-access-auth/+state/auth.selectors';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  const initialState: AuthState = { loaded: null, logged: false, errors: [] };
  const userEmail = 'test@test.com';

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let store: MockStore;
  let facade: AuthFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        provideMockStore({ initialState, selectors: [{ selector: AuthSelectors.getUser, value: { email: userEmail } }] }),
        AuthFacade
      ],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    facade = TestBed.inject(AuthFacade);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show user email', () => {
    const de = fixture.debugElement.query(By.css('.user-data'));
    const el = de.nativeElement as HTMLElement;

    expect(el.innerHTML).toContain(userEmail);
  });

  it('Should log out user on click over logout link', () => {
    const spy = spyOn(component, 'logout');
    const facadeSpy = spyOn(facade, 'logOut');

    const de = fixture.debugElement.query(By.css('#logutButton'));
    de.triggerEventHandler('click', {});

    expect(spy).toHaveBeenCalled();

  });

});


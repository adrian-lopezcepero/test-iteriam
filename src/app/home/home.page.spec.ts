import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthState } from '../shared/data-access-auth/+state/auth.reducer';


import { HomePage } from './home.page';
import * as AuthSelectors from '../shared/data-access-auth/+state/auth.selectors';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let store: MockStore;
  const initialState: AuthState = { loaded: null, logged: false, errors: [] };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        provideMockStore({ initialState, selectors: [{ selector: AuthSelectors.getUser, value: { email: 'test@test.com' } }] }),
        AuthFacade
      ],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


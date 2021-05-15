import {getMockStore } from '@ngrx/store/testing';
import { AuthFacade } from '../../shared/data-access-auth/+state/auth.facade';
import { HomePage } from './home.page';

describe('HomePage unit test', () => {
  let component: HomePage;
  let facade: AuthFacade;

  beforeEach(() => {
    facade = new AuthFacade(getMockStore({}));
    component = new HomePage(facade);
  });

  it('should logout user', () => {
    const spy = spyOn(facade, 'logOut').and.callThrough();

    component.logout();

    expect(spy).toHaveBeenCalled();
  });

});

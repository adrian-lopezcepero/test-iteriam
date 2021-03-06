import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  isLogged$ = this.store.pipe(select(AuthSelectors.getIsLogged));
  token$ = this.store.pipe(select(AuthSelectors.getToken));
  errors$ = this.store.pipe(select(AuthSelectors.getErrors));
  user$ = this.store.pipe(select(AuthSelectors.getUser));

  constructor(private store: Store) { }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  login(username: string, password: string) {
    this.store.dispatch(AuthActions.loginUser({ username, password }));
  }

  loginErrors(errors: string[]) {
    this.store.dispatch(AuthActions.loginValidationErrors({ errors }));
  }

  logOut() {
    this.store.dispatch(AuthActions.logOut());
  }
}

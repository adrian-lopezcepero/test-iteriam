import { TestBed } from '@angular/core/testing';
import { getMockStore, MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthFacade } from './auth.facade';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';



describe('Auth facade', () => {
    let facade: AuthFacade;
    let store: MockStore;

    beforeEach(() => {
        store = getMockStore({
            initialState: {},
            selectors: [
                { selector: AuthSelectors.getAuthLoaded, value: false },
                { selector: AuthSelectors.getIsLogged, value: false },
                { selector: AuthSelectors.getToken, value: '' },
                { selector: AuthSelectors.getErrors, value: [] },
                { selector: AuthSelectors.getUser, value: null },
            ]
        });
        facade = new AuthFacade(store);
    });

    it('should dispatch a login user event on login', () => {
        const username = 'email';
        const password = 'password';

        const spy = spyOn(store, 'dispatch');

        facade.login(username, password);

        expect(spy).toHaveBeenCalledOnceWith(AuthActions.loginUser({ username, password }));
    });

    it('should dispatch login errors on errors', () => {
        const errors = ['This is an error'];

        const spy = spyOn(store, 'dispatch');

        facade.loginErrors(errors);

        expect(spy).toHaveBeenCalledOnceWith(AuthActions.loginValidationErrors({ errors }));
    });

    it('should be loaded falsy', () => {

        facade.loaded$.subscribe((value) => {
            expect(value).toBeFalsy();
        });

    });

    it('should be logged falsy', () => {

        facade.isLogged$.subscribe((value) => {
            expect(value).toBeFalsy();
        });

    });

    it('should be token falsy', () => {

        facade.token$.subscribe((value) => {
            expect(value).toBeFalsy();
        });

    });

    it('should be errors empty', () => {

        facade.errors$.subscribe((value) => {
            expect(value.length).toBe(0);
        });

    });

    it('should be user to be untrusted', () => {

        facade.user$.subscribe((value) => {
            expect(value).toBeNull();
        });

    });
});

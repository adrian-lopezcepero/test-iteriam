import * as fromReducer from './auth.reducer';
import * as authActions from './auth.actions';

describe('Auth reducer', () => {
  it('should return the default state', () => {
    const { initialState } = fromReducer;
    
    const action = {
      type: 'Unknown',
    };
    const state = fromReducer.authReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should initialize loaded value to false', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {
      ...initialState, loaded: false, logged: false
    };

    const action = authActions.loginUser({
      username: 'test@iteriam.com',
      password: '123456'
    });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should change auth state to a valid login state', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {
      ...initialState,
      loaded: true,
      logged: true,
      token: 'validToken',
      user: { email: 'test@iteriam.com' },
      errors: []
    };

    const action = authActions.loginUserSuccess({
      loginResponse: {
        email: 'test@iteriam.com',
        token: 'validToken'
      }
    });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should initialize loaded value to false', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {
      ...initialState, loaded: false, logged: false
    };
    
    const action = authActions.loginUser({
      username: 'test@iteriam.com',
      password: '123456'
    });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should change auth state to an invalid login state', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {
      ...initialState,
      loaded: true,
      logged: false,
      errors: ['Usuario o contraseña inválida']
    };
    
    const action = authActions.loginUserFailure({
      error: 'Usuario o contraseña inválida'
    });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should change auth state to an invalid login state with validation errors', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {
      ...initialState,
      logged: false,
      errors: ['Email not valid']
    };
    
    const action = authActions.loginValidationErrors({
      errors: ['Email not valid']
    });
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should change state to initial state on log out', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.AuthState = {...initialState};
    
    const action = authActions.logOut();
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});

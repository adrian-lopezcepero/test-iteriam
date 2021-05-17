import { User } from '@app/shared/util';
import { AuthState } from './auth.reducer';
import { getAuthLoaded, getAuthState, getErrors, getIsLogged, getToken, getUser } from './auth.selectors';

describe('Auth Selectors', () => {

  const initialState: AuthState = {
    errors: [],
    loaded: false,
    logged: false
  };

  it('should select the auth state', () => {
    const result = getAuthState.projector(initialState);
    expect(result).toBeTruthy();
  });

  it('should select the loaded ', () => {
    const result = getAuthLoaded.projector(initialState.loaded);
    expect(result).toBeFalsy();
  });

  it('should select the logged ', () => {
    const result = getIsLogged.projector(initialState.logged);
    expect(result).toBeFalsy();
  });

  it('should select the token ', () => {
    const result = getToken.projector(initialState.token);
    expect(result).toBeUndefined();
  });

  it('should select the errors ', () => {
    const result = getErrors.projector(initialState.errors);
    expect(result).toBeUndefined();
  });

  it('should return nothing when select the user ', () => {
    const result = getUser.projector(initialState.user);
    expect(result).toBeUndefined();
  });

  it('should return nothing', () => {
    const result = getAuthState.projector(null);
    expect(result).toBeNull();
  });

  it('should select the user ', () => {
    const user: User = { email: '', password: '', rememberMe: true };
    const result = getUser.projector({ user });
    expect(result).toBeTruthy();
  });


});

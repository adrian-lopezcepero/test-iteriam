import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, authReducer, authsFeatureKey } from '../shared/data-access-auth/+state/auth.reducer';


export interface State {
  [authsFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [authsFeatureKey]: authReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

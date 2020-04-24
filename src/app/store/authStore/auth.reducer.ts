import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {authState} from './auth.state';

export function authReducer(state: AuthStateInterface = authState, action) {
  return state;
}

import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {authState} from './auth.state';
import {AuthActionTypes, TypeAuthActions} from './auth.action';

export function authReducer(state: AuthStateInterface = authState, action: TypeAuthActions) {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        user: action.payLoad
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }

}

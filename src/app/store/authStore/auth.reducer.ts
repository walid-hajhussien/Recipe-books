import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {authState} from './auth.state';
import {AuthActionTypes, TypeAuthActions} from './auth.action';

export function authReducer(state: AuthStateInterface = authState, action: TypeAuthActions) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payLoad,
        errorMessage: null
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        errorMessage: null
      };
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        errorMessage: action.payLoad
      };
    case AuthActionTypes.LOGIN_REQUEST:
      console.log('LOGIN_REQUEST', action);
      return {
        ...state,
        errorMessage: null
      };
    default:
      return state;
  }

}

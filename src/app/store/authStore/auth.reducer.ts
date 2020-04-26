import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {authState} from './auth.state';
import {AuthActionTypes, TypeAuthActions} from './auth.action';

export function authReducer(state: AuthStateInterface = authState, action: TypeAuthActions) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payLoad,
        errorMessage: null,
        loading: false
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        errorMessage: null,
        loading: false
      };
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        errorMessage: action.payLoad,
        loading: false
      };
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case AuthActionTypes.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null
      };
    default:
      return state;
  }

}

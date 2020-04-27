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
    case AuthActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case AuthActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        errorMessage: action.payLoad,
        loading: false
      };
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payLoad,
        errorMessage: null,
        loading: false
      };
    case AuthActionTypes.AUTO_LOGIN_REQUEST:
      return {
        ...state,
        user: null
      };
    case AuthActionTypes.AUTO_LOGIN_FAIL:
      console.log('AUTO_LOGIN_FAIL : ', action.payLoad);
      return {
        ...state,
        user: null,
        errorMessage: null,
        loading: false
      };
    case AuthActionTypes.AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payLoad,
        errorMessage: null,
        loading: null
      };
    default:
      return state;
  }

}

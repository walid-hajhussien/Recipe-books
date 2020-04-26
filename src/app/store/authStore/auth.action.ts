import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export enum AuthActionTypes {
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGOUT = '[Auth] LOGOUT',
  LOGIN_REQUEST = '[Auth] LOGIN_REQUEST',
  LOGIN_FAIL = '[Auth] LOGIN_FAIL',
  CLEAR_ERROR = '[Auth] CLEAR_ERROR',
  SIGN_UP_SUCCESS = '[Auth] SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '[Auth] SIGN_UP_FAIL',
  SIGN_UP_REQUEST = '[Auth] SIGN_UP_REQUEST',
  AUTO_LOGIN_REQUEST = '[Auth] AUTO_LOGIN_REQUEST',
  AUTO_LOGIN_FAIL = '[Auth] AUTO_LOGIN_FAIL'
}

export class AutoLoginRequestAction implements Action {
  public readonly type = AuthActionTypes.AUTO_LOGIN_REQUEST;
}

export class AutoLoginFailAction implements Action {
  public readonly type = AuthActionTypes.AUTO_LOGIN_FAIL;

  constructor(public payLoad: string) {
  }
}

export class SignUpRequestAction implements Action {
  public readonly type = AuthActionTypes.SIGN_UP_REQUEST;

  constructor(public payLoad: { email: string, password: string }) {
  }
}

export class SignUpSuccessAction implements Action {
  public readonly type = AuthActionTypes.SIGN_UP_SUCCESS;

  constructor(public payLoad: UserModel) {
  }
}

export class SignUpFailAction implements Action {
  public readonly type = AuthActionTypes.SIGN_UP_FAIL;

  constructor(public payLoad: string) {
  }
}

export class LoginSuccessAction implements Action {
  public readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payLoad: UserModel) {
  }

}

export class LogoutAction implements Action {
  public readonly type = AuthActionTypes.LOGOUT;
}

export class LoginRequest implements Action {
  public readonly type = AuthActionTypes.LOGIN_REQUEST;

  constructor(public payLoad: { email: string, password: string }) {
  }
}

export class LoginFailAction implements Action {
  public readonly type = AuthActionTypes.LOGIN_FAIL;

  constructor(public payLoad: string) {
  }
}

export class ClearErrorAction implements Action {
  public readonly type = AuthActionTypes.CLEAR_ERROR;
}


export type TypeAuthActions =
  LoginSuccessAction |
  LogoutAction |
  LoginRequest |
  LoginFailAction |
  ClearErrorAction |
  SignUpRequestAction |
  SignUpSuccessAction |
  SignUpFailAction |
  AutoLoginFailAction |
  AutoLoginRequestAction;


import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export enum AuthActionTypes {
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGOUT = '[Auth] LOGOUT',
  LOGIN_REQUEST = '[Auth] LOGIN_REQUEST',
  LOGIN_FAIL = '[Auth] LOGIN_FAIL',
  CLEAR_ERROR = '[Auth] CLEAR_ERROR'
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


export type TypeAuthActions = LoginSuccessAction | LogoutAction | LoginRequest | LoginFailAction | ClearErrorAction;

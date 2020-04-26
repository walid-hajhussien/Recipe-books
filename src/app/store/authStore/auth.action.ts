import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export enum AuthActionTypes {
  LOGINSUCCESS = '[Auth] LOGIN',
  LOGOUT = '[Auth] LOGOUT',
  LOGINREQUEST = '[Auth] LOGINREQUEST'

}


export class LoginSuccessAction implements Action {
  public readonly type = AuthActionTypes.LOGINSUCCESS;

  constructor(public payLoad: UserModel) {
  }

}

export class LogoutAction implements Action {
  public readonly type = AuthActionTypes.LOGOUT;
}

export class LoginRequest implements Action {
  public readonly type = AuthActionTypes.LOGINREQUEST;

  constructor(public payLoad: { email: string, password: string }) {
  }
}


export type TypeAuthActions = LoginSuccessAction | LogoutAction | LoginRequest;

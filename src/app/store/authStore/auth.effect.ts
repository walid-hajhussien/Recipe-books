import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginRequest, LoginSuccessAction, SignUpRequestAction, SignUpSuccessAction} from './auth.action';
import {switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Injectable()
export class AuthEffect {
  @Effect()
  authLoginRequest = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_REQUEST), switchMap((action: LoginRequest) => {
    return this.authService.signIn(action.payLoad.email, action.payLoad.password);
  }));

  @Effect({dispatch: false})
  authLoginSuccess = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_SUCCESS), tap((action: LoginSuccessAction) => {
    this.authService.storeUserData(action.payLoad);
    this.router.navigate(['/']);
  }));

  @Effect()
  authSignUpRequest = this.actions$.pipe(ofType(AuthActionTypes.SIGN_UP_REQUEST), switchMap((action: SignUpRequestAction) => {
    return this.authService.signUp(action.payLoad.email, action.payLoad.password);
  }));

  @Effect({dispatch: false})
  authSignUpSuccess = this.actions$.pipe(ofType(AuthActionTypes.SIGN_UP_SUCCESS), tap((action: SignUpSuccessAction) => {
    this.authService.storeUserData(action.payLoad);
    this.router.navigate(['/']);
  }));

  @Effect({dispatch: false})
  authLogOut = this.actions$.pipe(ofType(AuthActionTypes.LOGOUT), tap(() => {
    this.authService.removeUserData();
    this.router.navigate(['/auth']);
  }));

  @Effect()
  authAutoLogin = this.actions$.pipe(ofType(AuthActionTypes.AUTO_LOGIN_REQUEST), switchMap(() => {
    return of(this.authService.autoLogin());
  }));

  constructor(private actions$: Actions, private http: HttpClient, private authService: AuthService, private router: Router) {
  }

}

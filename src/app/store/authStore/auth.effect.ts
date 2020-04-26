import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginRequest, LoginSuccessAction} from './auth.action';
import {switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffect {
  @Effect()
  authLoginRequest = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_REQUEST), switchMap((action: LoginRequest) => {
    return this.authService.signIn(action.payLoad.email, action.payLoad.password);
  }));

  @Effect({dispatch: false})
  authSuccess = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_SUCCESS), tap((action: LoginSuccessAction) => {
    this.authService.storeUserData(action.payLoad);
    this.router.navigate(['/']);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private authService: AuthService, private router: Router) {
  }

}

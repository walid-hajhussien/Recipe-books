import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginRequest} from './auth.action';
import { switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Injectable()
export class AuthEffect {
  @Effect()
  authLoginRequest = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_REQUEST), switchMap((action: LoginRequest) => {
    return this.authService.signIn(action.payLoad.email, action.payLoad.password);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private authService: AuthService) {
  }

}

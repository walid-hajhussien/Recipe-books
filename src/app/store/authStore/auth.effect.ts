import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginRequest} from './auth.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {FbSignIn} from '../../interfaces/fb-sign-in';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../../models/credentials.model';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Injectable()
export class AuthEffect {
  @Effect()
  authLoginRequest = this.actions$.pipe(ofType(AuthActionTypes.LOGINREQUEST), switchMap((action: LoginRequest) => {
    return this.authService.signIn(action.payLoad.email, action.payLoad.password);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private authService: AuthService) {
  }

}

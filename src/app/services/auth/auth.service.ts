import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CredentialsModel} from '../../models/credentials.model';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {FbSignUp} from '../../interfaces/fb-sign-up';
import {catchError, exhaustMap, map, take, tap} from 'rxjs/operators';
import {ErrorMessagePipe} from '../../pipes/errorMessage/error-message.pipe';
import {FbSignIn} from '../../interfaces/fb-sign-in';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {LoginFailAction, LoginSuccessAction, LogoutAction, SignUpFailAction, SignUpSuccessAction} from '../../store/authStore/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private errorMessagePipe: ErrorMessagePipe,
    private router: Router,
    private store: Store<AppStateInterface>) {
  }

  storeUserData(user: UserModel): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  removeUserData(): void {
    localStorage.removeItem('userData');
  }

  formatError(errorResponse: HttpErrorResponse): string {
    let errorMessage = 'An Unknown Error Occur !';
    if (errorResponse?.error?.error?.message) {
      errorMessage = this.errorMessagePipe.transform(errorResponse.error.error.message);
    }
    return errorMessage;
  }

  signUp(email: string, password: string): Observable<SignUpSuccessAction | SignUpFailAction> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post<FbSignUp>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey
      , credentials).pipe(map((response) => {
      const user = this.createUser(response);
      return new SignUpSuccessAction(user);
    }), catchError(errorResponse => {
      const errorMessage = this.formatError(errorResponse);
      return of(new SignUpFailAction(errorMessage));
    }));
  }

  signIn(email: string, password: string): Observable<LoginSuccessAction | LoginFailAction> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post<FbSignIn>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey
      , credentials).pipe(
      map((response) => {
        const user = this.createUser(response);
        return new LoginSuccessAction(user);
      }),
      catchError((errorResponse) => {
        const errorMessage = this.formatError(errorResponse);
        return of(new LoginFailAction(errorMessage));
      }));
  }

  autoSignIn() {
    const localUser = localStorage.getItem('userData');
    if (!localUser) {
      return null;
    }
    const userParse = JSON.parse(localUser);
    const user = new UserModel(userParse.localId, userParse.email, userParse.token, new Date(userParse.tokenExpirationDate),
      userParse.refreshToken);
    if (user.getToken) {
      const expirationTime = (new Date(userParse.tokenExpirationDate).getTime()) - (new Date().getTime());
      console.log(expirationTime);
      this.store.dispatch(new LoginSuccessAction(user));
    }
  }

  createUser(userData: FbSignIn | FbSignUp): UserModel {
    const expirationDate = new Date((new Date().getTime()) + +userData.expiresIn * 1000);
    const user = new UserModel(userData.localId, userData.email, userData.idToken, expirationDate, userData.refreshToken);
    return user;
  }

  sendVerificationEmail(idToken: string): Observable<any> {
    const obj = {idToken, requestType: 'VERIFY_EMAIL'};
    return this.http.post<FbSignUp>(
      'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw'
      , obj);
  }
}

/*


*/

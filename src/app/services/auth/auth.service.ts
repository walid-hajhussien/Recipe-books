import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CredentialsModel} from '../../models/credentials.model';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {FbSignUp} from '../../interfaces/fb-sign-up';
import {catchError, exhaustMap, take, tap} from 'rxjs/operators';
import {ErrorMessagePipe} from '../../pipes/errorMessage/error-message.pipe';
import {FbSignIn} from '../../interfaces/fb-sign-in';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient, private errorMessagePipe: ErrorMessagePipe, private router: Router) {
  }

  storeUserData(userData: FbSignIn | FbSignUp): void {
    const expirationDate = new Date((new Date().getTime()) + +userData.expiresIn * 1000);
    const user = new UserModel(userData.localId, userData.email, userData.idToken, expirationDate, userData.refreshToken);
    this.userSubject.next(user);
  }

  formatError(errorResponse: HttpErrorResponse): string {
    let errorMessage = 'An Unknown Error Occur !';
    if (errorResponse?.error?.error?.message) {
      errorMessage = this.errorMessagePipe.transform(errorResponse.error.error.message);
    }
    return errorMessage;
  }

  signUp(email: string, password: string): Observable<any> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post<FbSignUp>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw'
      , credentials).pipe(catchError(errorResponse => {
      return throwError(this.formatError(errorResponse));
    }), tap((response) => {
      this.storeUserData(response);
    }));
  }

  signIn(email: string, password: string): Observable<any> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post<FbSignIn>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw'
      , credentials).pipe(catchError((errorResponse) => {
      return throwError(this.formatError(errorResponse));
    }), tap((response) => {
      this.storeUserData(response);
    }));
  }

  logout(): void {
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
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

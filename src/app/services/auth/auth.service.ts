import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../../models/credentials.model';
import {Observable} from 'rxjs';
import {FbSignUp} from '../../interfaces/fb-sign-up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<any> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post<FbSignUp>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw'
      , credentials);
  }

  sendVerificationEmail(idToken: string): Observable<any> {
    const obj = {idToken, requestType: 'VERIFY_EMAIL'};
    return this.http.post<FbSignUp>(
      'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw'
      , obj);
  }
}

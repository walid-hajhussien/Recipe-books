import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../../models/credentials.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<any> {
    const credentials: CredentialsModel = new CredentialsModel(email, password);
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="AIzaSyCV9dfC0uefiSSmlILJb8OvgsUSqtXN4lw"'
      , credentials);
  }
}

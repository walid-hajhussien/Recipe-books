import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {exhaustMap, take} from 'rxjs/operators';
import {UserModel} from '../../models/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authService.userSubject.pipe(take(1), exhaustMap((user: UserModel) => {
      if (!user) {
        return next.handle(request);
      }
      const param = new HttpParams().set('auth', user.getToken);
      const newRequest = request.clone({
        params: param
      });

      return next.handle(newRequest);
    }));
  }
}

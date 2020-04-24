import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import {UserModel} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private store: Store<AppStateInterface>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.store.select('auth').pipe(take(1), map((authState: AuthStateInterface) => {
      return authState.user;
    }), exhaustMap((user: UserModel) => {
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

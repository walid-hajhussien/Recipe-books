import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {map, take, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private store: Store<AppStateInterface>) {
  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean {

    return this.store.select('auth').pipe(take(1), map((authState: AuthStateInterface) => {
      const auth = !!authState.user;
      if (auth) {
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    }));

  }
}

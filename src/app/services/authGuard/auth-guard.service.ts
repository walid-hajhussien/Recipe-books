import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean {

    return this.authService.userSubject.pipe(take(1), map((user) => {
      const auth = !!user;
      if (auth) {
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    }));

  }
}

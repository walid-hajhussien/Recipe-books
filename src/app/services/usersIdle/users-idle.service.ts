import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserIdleService} from 'angular-user-idle';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {map} from 'rxjs/operators';
import {UserModel} from '../../models/user.model';
import {LogoutAction} from '../../store/authStore/auth.action';

@Injectable({
  providedIn: 'root'
})
export class UsersIdleService {
  ping: Subscription;

  constructor(
    private authService: AuthService,
    private userIdle: UserIdleService,
    private store: Store<AppStateInterface>
  ) {
    this.addEvent();
    this.store.select('auth').pipe(map((authState: AuthStateInterface) => {
      return authState.user;
    })).subscribe((user: UserModel) => {
      if (user) {
        console.log('start Idle');
        this.startIdle();
      } else {
        console.log('Stop Idle');
        this.stopIdle();
      }

    });
  }




  startIdle() {
    this.userIdle.startWatching();
    this.startPing();
  }

  stopIdle() {
    this.userIdle.stopWatching();
    if (this.ping) {
      this.ping.unsubscribe();
    }

  }

  resetIdle() {
    this.userIdle.resetTimer();
  }

  timeOut() {
    this.stopIdle();
    this.ping.unsubscribe();
    console.log('Idle-Time-Out');
    this.store.dispatch(new LogoutAction());
  }

  startPing() {
    this.ping = this.userIdle.ping$.subscribe(() => console.log('PING'));
  }

  addEvent() {
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => {
      this.timeOut();
    });

  }


}

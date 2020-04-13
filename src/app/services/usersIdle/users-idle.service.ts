import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserIdleService} from 'angular-user-idle';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersIdleService {
  ping: Subscription;

  constructor(private authService: AuthService, private userIdle: UserIdleService) {
    this.addEvent();
    this.authService.userSubject.subscribe((user) => {
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
    this.authService.logout();
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

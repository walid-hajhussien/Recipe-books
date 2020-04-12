import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserIdleService} from 'angular-user-idle';

@Injectable({
  providedIn: 'root'
})
export class UsersIdleService {

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
  }

  stopIdle() {
    this.userIdle.stopWatching();
  }

  resetIdle() {
    this.userIdle.resetTimer();
  }

  timeOut() {
    this.stopIdle();
    console.log('Idle-Time-Out');
    this.authService.logout();
  }

  addEvent() {
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => {
      this.timeOut();
    });
  }


}

import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from './interfaces/store/app-state-interface';
import {AutoLoginRequestAction} from './store/authStore/auth.action';
import {UsersIdleService} from './services/usersIdle/users-idle.service';
import {isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe-books';

  constructor(
    private store: Store<AppStateInterface>,
    private usersIdleService: UsersIdleService,
    @Inject(PLATFORM_ID) private platformId) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AutoLoginRequestAction());
    }
    const platformName = isPlatformBrowser(this.platformId) ? 'Browser' : 'server';
    console.log('Platform Name : ' + platformName);
  }


}

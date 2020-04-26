import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from './interfaces/store/app-state-interface';
import {AutoLoginRequestAction} from './store/authStore/auth.action';
import {UsersIdleService} from './services/usersIdle/users-idle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe-books';

  constructor(private store: Store<AppStateInterface>, private usersIdleService: UsersIdleService) {

  }

  ngOnInit(): void {
    this.store.dispatch(new AutoLoginRequestAction());
  }


}

import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {UsersIdleService} from './services/usersIdle/users-idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe-books';

  constructor(private authService: AuthService, private usersIdleService: UsersIdleService) {

  }

  ngOnInit(): void {
    this.authService.autoSignIn();
  }


}

import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSwitchLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      return;
    } else {
      // signUp
      this.authService.signUp(email, password).subscribe((response) => {
        console.log(response);
        // send verification email
        // this.authService.sendVerificationEmail(response.idToken).subscribe((res) => {
        //   console.log('res', res);
        // });
      }, error => {
        console.log(error);
      });

    }


  }

}

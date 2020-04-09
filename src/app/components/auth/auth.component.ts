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
  isLoading = false;
  errorMessage: string = null;

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
      // loading
      this.isLoading = true;
      // signUp
      this.authService.signUp(email, password).subscribe((response) => {
        this.isLoading = false;
        form.reset();
        console.log(response);
        // send verification email
        // this.authService.sendVerificationEmail(response.idToken).subscribe((res) => {
        //   console.log('res', res);
        // });
      }, error => {
        this.isLoading = false;
        this.errorMessage = 'server not available !';
        console.log(error);
      });

    }


  }

}

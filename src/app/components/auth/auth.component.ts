import {Component, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('form', {static: true}) formObject: NgForm;

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
      this.signIn(email, password);
    } else {
      this.signUp(email, password);
    }
  }

  signUp(email: string, password: string) {
    this.errorMessage = null;
    this.isLoading = true;
    this.authService.signUp(email, password).subscribe((response) => {
      this.isLoading = false;
      this.formObject.reset();
    }, errorResponse => {
      this.isLoading = false;
      this.errorMessage = errorResponse;
    });
  }

  signIn(email: string, password: string) {
    this.errorMessage = null;
    this.isLoading = true;
    this.authService.signIn(email, password).subscribe((response) => {
      this.formObject.reset();
      this.isLoading = false;
      console.log('Login', response);
    }, (errorResponse) => {
      console.log('LoginError', errorResponse);
    });

  }

}

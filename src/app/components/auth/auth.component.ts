import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {AlertComponent} from '../../DynamicComponents/alert/alert.component';
import {PlaceholderDirective} from '../../directives/placeholder/placeholder.directive';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {LoginRequest} from '../../store/authStore/auth.action';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  errorMessage: string = null;
  private closeComponent: Subscription;

  @ViewChild('form', {static: true}) formObject: NgForm;

  @ViewChild(PlaceholderDirective, {static: true}) alertHost: PlaceholderDirective;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.closeComponent) {
      this.closeComponent.unsubscribe();
    }

  }

  onSwitchLoginMode() {
    this.errorMessage = null;
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.store.dispatch(new LoginRequest({email, password}));
     // this.signIn(email, password);
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
      this.router.navigate(['/recipes']);
    }, error => {
      this.isLoading = false;
      this.errorMessage = error;
      // this.showErrorAlert(error);
    });
  }

  signIn(email: string, password: string) {
    this.errorMessage = null;
    this.isLoading = true;
    this.authService.signIn(email, password).subscribe((response) => {
      this.formObject.reset();
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error;
      // this.showErrorAlert(error);
    });

  }

  clearError() {
    this.errorMessage = null;
  }

  private showErrorAlert(errorMessage: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const viewContainerRef = this.alertHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = errorMessage;
    this.closeComponent = componentRef.instance.closeAlert.subscribe(() => {
      this.closeComponent.unsubscribe();
      viewContainerRef.clear();
    });

  }

}

import {NgModule} from '@angular/core';
import {ErrorMessagePipe} from '../../pipes/errorMessage/error-message.pipe';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../interceptors/auth/auth.interceptor';

@NgModule({
  providers: [ErrorMessagePipe, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }]
})
export class CoreModule {

}







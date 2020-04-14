import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {ErrorMessagePipe} from './pipes/errorMessage/error-message.pipe';
import {AuthInterceptor} from './interceptors/auth/auth.interceptor';
import {UserIdleModule} from 'angular-user-idle';
import {RecipeModule} from './modules/recipeModule/recipe.module';
import {ShoppingListModule} from './modules/shoppingListModule/shopping-list.module';
import {SharedModule} from './modules/sharedModule/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 600, timeout: 10, ping: 300}),
    RecipeModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ErrorMessagePipe, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

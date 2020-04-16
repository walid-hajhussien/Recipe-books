import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {UserIdleModule} from 'angular-user-idle';
import {ShoppingListModule} from './modules/shoppingListModule/shopping-list.module';
import {SharedModule} from './modules/sharedModule/shared.module';
import {CoreModule} from './modules/coreModule/core.module';
import {AuthModule} from './modules/authModule/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 600, timeout: 10, ping: 300}),
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

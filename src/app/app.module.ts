import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserIdleModule} from 'angular-user-idle';
import {SharedModule} from './modules/sharedModule/shared.module';
import {CoreModule} from './modules/coreModule/core.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from './store/shoppingListStore/shopping-list.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    UserIdleModule.forRoot({idle: 600, timeout: 10, ping: 300}),
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

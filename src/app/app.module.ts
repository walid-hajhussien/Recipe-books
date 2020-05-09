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
import {appReducer} from './store/appStore/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffect} from './store/authStore/auth.effect';
import {environment} from '../environments/environment';
import {RecipeEffect} from './store/recipeStore/recipe.effect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NetworkEffect} from './store/networkStore/network.effect';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffect, RecipeEffect, NetworkEffect]),
    environment.DevtoolsModule,
    UserIdleModule.forRoot({idle: 600, timeout: 10, ping: 300}),
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

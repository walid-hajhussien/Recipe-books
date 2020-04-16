import {NgModule} from '@angular/core';
import {AuthComponent} from '../../components/auth/auth.component';
import {SharedModule} from '../sharedModule/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}

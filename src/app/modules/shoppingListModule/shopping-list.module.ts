import {NgModule} from '@angular/core';
import {ShoppingListComponent} from '../../components/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../../components/shopping-edit/shopping-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {SharedModule} from '../sharedModule/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {

}

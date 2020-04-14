import {NgModule} from '@angular/core';
import {ShoppingListComponent} from '../../components/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../../components/shopping-edit/shopping-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {

}

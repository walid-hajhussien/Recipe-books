import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from '../../components/shopping-list/shopping-list.component';

const shoppingListRoutes: Routes = [
  {path: 'shoppingList', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {AuthComponent} from './components/auth/auth.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

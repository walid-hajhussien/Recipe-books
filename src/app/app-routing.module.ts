import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: () => import('./modules/recipeModule/recipe.module').then(modules => modules.RecipeModule)},
  {
    path: 'shoppingList',
    loadChildren: () => import('./modules/shoppingListModule/shopping-list.module').then(modules => modules.ShoppingListModule)
  },
  {path: 'auth', loadChildren: () => import('./modules/authModule/auth.module').then(modules => modules.AuthModule)}
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

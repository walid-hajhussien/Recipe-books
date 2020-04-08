import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {SelectRecipeComponent} from './components/select-recipe/select-recipe.component';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {RecipeResolverService} from './resolvers/recipeResolver/recipe-resolver.service';
import {AuthComponent} from './components/auth/auth.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'shoppingList', component: ShoppingListComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: SelectRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]
  },
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

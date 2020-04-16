import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../../components/recipes/recipes.component';
import {AuthGuardService} from '../../services/authGuard/auth-guard.service';
import {SelectRecipeComponent} from '../../components/select-recipe/select-recipe.component';
import {RecipeEditComponent} from '../../components/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from '../../components/recipe-detail/recipe-detail.component';
import {RecipeResolverService} from '../../resolvers/recipeResolver/recipe-resolver.service';

const recipeRoutes: Routes = [
  {
    path: '', component: RecipesComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: SelectRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {
}

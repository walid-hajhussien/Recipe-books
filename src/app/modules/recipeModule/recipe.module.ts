import {NgModule} from '@angular/core';
import {RecipesComponent} from '../../components/recipes/recipes.component';
import {RecipeDetailComponent} from '../../components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from '../../components/recipe-edit/recipe-edit.component';
import {RecipeItemComponent} from '../../components/recipe-item/recipe-item.component';
import {RecipeListComponent} from '../../components/recipe-list/recipe-list.component';
import {SelectRecipeComponent} from '../../components/select-recipe/select-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipeRoutingModule} from './recipe-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    SelectRecipeComponent
  ],
  exports: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    SelectRecipeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RecipeRoutingModule
  ]
})

export class RecipeModule {

}

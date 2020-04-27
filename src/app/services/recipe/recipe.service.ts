import { Injectable} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[];
  public recipesChange: Subject<RecipeModel[]> = new Subject();

  constructor() {

    this.recipes = [];
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.recipes);
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number): RecipeModel {
    return this.recipes[id];
  }

  updateRecipe(index: number, recipe: RecipeModel) {
    this.recipes[index] = recipe;
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }


}

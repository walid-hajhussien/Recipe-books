import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';
import {recipeState} from './recipe.state';
import {TypeRecipeActions} from './recipe.action';

export function recipeReducer(state: RecipeStateInterface = recipeState, action: TypeRecipeActions) {
  switch (action.type) {
    default:
      return state;
  }
}

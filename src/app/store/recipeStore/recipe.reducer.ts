import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';
import {recipeState} from './recipe.state';
import {RecipeActionType, TypeRecipeActions} from './recipe.action';

export function recipeReducer(state: RecipeStateInterface = recipeState, action: TypeRecipeActions) {
  switch (action.type) {
    case RecipeActionType.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payLoad]
      };
    case RecipeActionType.ADD_RECIPES:
      return {
        ...state,
        recipes: [...action.payLoad]
      };
    case RecipeActionType.DELETE_RECIPE:
      const deletedRecipes = [...state.recipes];
      deletedRecipes.splice(action.payLoad, 1);
      return {
        ...state,
        recipes: deletedRecipes
      };
    case RecipeActionType.UPDATE_RECIPE:

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payLoad.index] = action.payLoad.recipe;
      return {
        ...state,
        recipes: updatedRecipes
      };
    default:
      return state;
  }
}

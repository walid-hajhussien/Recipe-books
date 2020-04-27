import {Action} from '@ngrx/store';
import {RecipeModel} from '../../models/recipe.model';

export enum RecipeActionType {
  ADD_RECIPE = '[RECIPE] ADD_RECIPE',
  ADD_RECIPES = '[RECIPE] ADD_RECIPES',
  UPDATE_RECIPE = '[RECIPE] UPDATE_RECIPE',
  DELETE_RECIPE = '[RECIPE] DELETE_RECIPE',
  SAVE_RECIPES = '[RECIPE] SAVE_RECIPES',
  FETCH_RECIPE = '[RECIPE] FETCH_RECIPE',
}

export class AddRecipeAction implements Action {
  public readonly type = RecipeActionType.ADD_RECIPE;

  constructor(public payLoad: RecipeModel) {
  }
}

export class AddRecipesAction implements Action {
  public readonly type = RecipeActionType.ADD_RECIPES;

  constructor(public payLoad: RecipeModel[]) {
  }
}

export class UpdateRecipesAction implements Action {
  public readonly type = RecipeActionType.UPDATE_RECIPE;

  constructor(public payLoad: { index: number, recipe: RecipeModel }) {
  }
}

export class DeleteRecipesAction implements Action {
  public readonly type = RecipeActionType.DELETE_RECIPE;

  constructor(public payLoad: number) {
  }
}

export class SaveRecipesAction implements Action {
  public readonly type = RecipeActionType.SAVE_RECIPES;

  constructor(public payLoad: RecipeModel[]) {
  }
}

export class FetchRecipesAction implements Action {
  public readonly type = RecipeActionType.FETCH_RECIPE;
}


export type TypeRecipeActions =
  AddRecipeAction |
  AddRecipesAction |
  UpdateRecipesAction |
  DeleteRecipesAction |
  SaveRecipesAction |
  FetchRecipesAction;

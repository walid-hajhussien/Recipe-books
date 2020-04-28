import {Action} from '@ngrx/store';
import {RecipeModel} from '../../models/recipe.model';

export enum RecipeActionType {
  ADD_RECIPE = '[RECIPE] ADD_RECIPE',
  FETCH_RECIPE_SUCCESS = '[RECIPE] FETCH_RECIPE_SUCCESS',
  UPDATE_RECIPE = '[RECIPE] UPDATE_RECIPE',
  DELETE_RECIPE = '[RECIPE] DELETE_RECIPE',
  STORE_RECIPES = '[RECIPE] SAVE_RECIPES',
  FETCH_RECIPE = '[RECIPE] FETCH_RECIPE',
  FETCH_RECIPE_FAIL = '[RECIPE] FETCH_RECIPE_FAIL'
}

export class AddRecipeAction implements Action {
  public readonly type = RecipeActionType.ADD_RECIPE;

  constructor(public payLoad: RecipeModel) {
  }
}

export class FetchRecipesSuccessAction implements Action {
  public readonly type = RecipeActionType.FETCH_RECIPE_SUCCESS;

  constructor(public payLoad: RecipeModel[]) {
  }
}

export class FetchRecipesFailAction implements Action {
  public readonly type = RecipeActionType.FETCH_RECIPE_FAIL;

  constructor(payLoad: string) {
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

export class StoreRecipesAction implements Action {
  public readonly type = RecipeActionType.STORE_RECIPES;
}

export class FetchRecipesAction implements Action {
  public readonly type = RecipeActionType.FETCH_RECIPE;
}


export type TypeRecipeActions =
  AddRecipeAction |
  FetchRecipesSuccessAction |
  UpdateRecipesAction |
  DeleteRecipesAction |
  StoreRecipesAction |
  FetchRecipesAction |
  FetchRecipesFailAction;

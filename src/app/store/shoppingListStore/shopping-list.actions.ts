import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  START_EDIT_INGREDIENT = 'START_EDIT_INGREDIENT',
  STOP_EDIT_INGREDIENT = 'STOP_EDIT_INGREDIENT'
}


export class AddIngredientAction implements Action {
  public readonly type = ShoppingListActionTypes.ADD_INGREDIENT;

  constructor(public payLoad: IngredientModel) {
  }
}

export class AddIngredientsAction implements Action {
  public readonly type = ShoppingListActionTypes.ADD_INGREDIENTS;

  constructor(public payLoad: IngredientModel[]) {
  }
}

export class UpdateIngredientsAction implements Action {
  public readonly type = ShoppingListActionTypes.UPDATE_INGREDIENT;

  constructor(public payLoad: IngredientModel) {
  }
}

export class DeleteIngredientsAction implements Action {
  public readonly type = ShoppingListActionTypes.DELETE_INGREDIENT;
}

export class StartEditIngredientAction implements Action {
  public readonly type = ShoppingListActionTypes.START_EDIT_INGREDIENT;

  constructor(public payLoad: number) {
  }
}

export class StopEditIngredientAction implements Action {
  public readonly type = ShoppingListActionTypes.STOP_EDIT_INGREDIENT;

}

export type TypeShoppingListActions = AddIngredientAction |
  AddIngredientsAction |
  UpdateIngredientsAction |
  DeleteIngredientsAction |
  StartEditIngredientAction |
  StopEditIngredientAction;

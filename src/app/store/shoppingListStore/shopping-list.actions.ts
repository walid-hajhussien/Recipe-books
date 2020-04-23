import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT'
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

  constructor(public payLoad: { index: number, ingredient: IngredientModel }) {
  }
}

export class DeleteIngredientsAction implements Action {
  public readonly type = ShoppingListActionTypes.DELETE_INGREDIENT;

  constructor(public payLoad: number) {
  }
}

export type ShoppingListActions = AddIngredientAction | AddIngredientsAction | UpdateIngredientsAction | DeleteIngredientsAction;

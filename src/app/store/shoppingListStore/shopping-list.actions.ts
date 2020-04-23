import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS'
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

export type ShoppingListActions = AddIngredientAction | AddIngredientsAction;

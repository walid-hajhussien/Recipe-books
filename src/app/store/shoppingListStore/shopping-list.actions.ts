import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT'
}


export class AddIngredientAction implements Action {
  public readonly type = ShoppingListActionTypes.ADD_INGREDIENT;

  constructor(public payLoad: IngredientModel) {
  }
}

// you can use | to add all the action
export type ShoppingListActions = AddIngredientAction;

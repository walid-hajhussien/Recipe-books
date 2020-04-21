import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT'
}


export class AddIngredient implements Action {
  readonly type: ShoppingListActionTypes.ADD_INGREDIENT;
  payLoad: IngredientModel;
}


export type ShoppingListAction = AddIngredient;

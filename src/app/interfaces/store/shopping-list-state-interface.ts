import {IngredientModel} from '../../models/ingredient.model';

export interface ShoppingListStateInterface {
  ingredients: IngredientModel[];
  editedIngredient: IngredientModel;
  editedIngredientIndex: number;
}

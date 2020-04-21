import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';
import {IngredientModel} from '../../models/ingredient.model';

export const shoppingListState: ShoppingListStateInterface = {
  ingredients: [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)]
};

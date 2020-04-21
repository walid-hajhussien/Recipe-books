import {ShoppingListStateInterface} from '../../interfaces/shopping-list-state-interface';
import {IngredientModel} from '../../models/ingredient.model';

const initState: ShoppingListStateInterface = {
  ingredients: [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)]
};

export function shoppingListReducer(currentState = initState, action) {

}

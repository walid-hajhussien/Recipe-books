import {ShoppingListStateInterface} from '../../interfaces/shopping-list-state-interface';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListAction, ShoppingListActionTypes} from './shopping-list.actions';


const initState: ShoppingListStateInterface = {
  ingredients: [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)]
};

export function shoppingListReducer(state: ShoppingListStateInterface = initState, action: ShoppingListAction) {

  switch (action.type) {
    case ShoppingListActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payLoad]
      };
      break;
    default:
      return state;
      break;

  }

}

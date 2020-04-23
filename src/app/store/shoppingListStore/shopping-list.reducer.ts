import {ShoppingListActions, ShoppingListActionTypes} from './shopping-list.actions';
import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';
import {shoppingListState} from './shopping-list.state';


export function shoppingListReducer(state: ShoppingListStateInterface = shoppingListState, action: ShoppingListActions) {

  switch (action.type) {
    case ShoppingListActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payLoad]
      };
    case ShoppingListActionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payLoad]
      };
    default:
      return state;
  }

}

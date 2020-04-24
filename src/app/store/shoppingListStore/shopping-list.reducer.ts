import { ShoppingListActionTypes, TypeShoppingListActions} from './shopping-list.actions';
import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';
import {shoppingListState} from './shopping-list.state';


export function shoppingListReducer(state: ShoppingListStateInterface = shoppingListState, action: TypeShoppingListActions) {

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
    case ShoppingListActionTypes.UPDATE_INGREDIENT:
      const newIngredientCopy = {...action.payLoad};
      const newIngredients = [...state.ingredients];
      newIngredients[state.editedIngredientIndex] = newIngredientCopy;

      return {
        ...state,
        ingredients: newIngredients
      };
    case ShoppingListActionTypes.DELETE_INGREDIENT:
      const updatedIngredients = state.ingredients.filter((value, index) => {
        return index !== state.editedIngredientIndex;
      });

      return {
        ...state,
        ingredients: updatedIngredients
      };
    case ShoppingListActionTypes.START_EDIT_INGREDIENT:
      return {
        ...state,
        editedIngredientIndex: action.payLoad,
        editedIngredient: {...state.ingredients[action.payLoad]}
      };
    case ShoppingListActionTypes.STOP_EDIT_INGREDIENT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: null
      };
    default:
      return state;
  }

}

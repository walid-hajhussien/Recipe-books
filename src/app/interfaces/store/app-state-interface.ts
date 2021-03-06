import {ShoppingListStateInterface} from './shopping-list-state-interface';
import {AuthStateInterface} from './auth-state-interface';
import {RecipeStateInterface} from './recipe-state-interface';
import {NetworkStateInterface} from './network-state-interface';

export interface AppStateInterface {
  shoppingList: ShoppingListStateInterface;
  auth: AuthStateInterface;
  recipe: RecipeStateInterface;
  network: NetworkStateInterface;
}

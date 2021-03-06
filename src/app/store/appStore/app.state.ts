import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {shoppingListState} from '../shoppingListStore/shopping-list.state';
import {authState} from '../authStore/auth.state';
import {recipeState} from '../recipeStore/recipe.state';
import {networkState} from '../networkStore/network.state';

export const appState: AppStateInterface = {
  shoppingList: shoppingListState,
  auth: authState,
  recipe: recipeState,
  network: networkState
};

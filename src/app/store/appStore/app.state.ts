import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {shoppingListState} from '../shoppingListStore/shopping-list.state';
import {authState} from '../authStore/auth.state';

export const appState: AppStateInterface = {
  shoppingList: shoppingListState,
  auth: authState
};

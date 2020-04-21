import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {shoppingListState} from '../shoppingListStore/shopping-list.state';

export const appState: AppStateInterface = {
  shoppingList: shoppingListState,
};

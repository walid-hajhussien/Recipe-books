import {ActionReducerMap} from '@ngrx/store';
import {shoppingListReducer} from '../shoppingListStore/shopping-list.reducer';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';

export const appReducer: ActionReducerMap<AppStateInterface> = {
  shoppingList: shoppingListReducer
};

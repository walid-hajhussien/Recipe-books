import {ActionReducerMap} from '@ngrx/store';
import {shoppingListReducer} from '../shoppingListStore/shopping-list.reducer';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {authReducer} from '../authStore/auth.reducer';

export const appReducer: ActionReducerMap<AppStateInterface> = {
  shoppingList: shoppingListReducer,
  auth: authReducer
};

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {
  DeleteIngredientsAction, StartEditIngredientAction, StopEditIngredientAction
} from '../../store/shoppingListStore/shopping-list.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startingEdit: Subject<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.startingEdit = new Subject<number>();
  }

  deleteIngredient() {
    this.store.dispatch(new DeleteIngredientsAction());
    // this.ingredients.splice(index, 1);
    // this.ingrediantsChange.next(this.ingredients);
  }

  startEditIngredient(index: number) {
    this.store.dispatch(new StartEditIngredientAction(index));
  }

  stopEditIngredient() {
    this.store.dispatch(new StopEditIngredientAction());
  }


}

import {Injectable} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {
  AddIngredientAction,
  AddIngredientsAction,
  DeleteIngredientsAction, StartEditIngredientAction, StopEditIngredientAction,
  UpdateIngredientsAction
} from '../../store/shoppingListStore/shopping-list.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startingEdit: Subject<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.startingEdit = new Subject<number>();
  }


  addIngredients(ingredients: IngredientModel[]) {
    // this.ingredients.push(...ingredients);
    // this.ingrediantsChange.next(this.ingredients);
    this.store.dispatch(new AddIngredientsAction(ingredients));
  }

  updateIngredient(ingredient: IngredientModel) {
    this.store.dispatch(new UpdateIngredientsAction(ingredient));
    // this.ingredients[index] = ingredient;
    // this.ingrediantsChange.next(this.ingredients);

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

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
  ingrediantsChange = new Subject<IngredientModel[]>();
  private readonly ingredients: IngredientModel[];
  startingEdit: Subject<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.ingredients = [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)];
    this.startingEdit = new Subject<number>();
  }

  getIngredients() {
    return this.ingredients;
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientModel) {
    // this.ingredients.push(ingredient);
    // this.ingrediantsChange.next(this.ingredients);
    this.store.dispatch(new AddIngredientAction(ingredient));
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

  deleteIngredient(index: number) {
    this.store.dispatch(new DeleteIngredientsAction(index));
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

import { Injectable } from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantsChange =  new Subject<IngredientModel[]>();
  private readonly  ingredients: IngredientModel[];
  startingEdit: Subject<number>;

  constructor() {
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
    this.ingrediantsChange.next(this.ingredients);
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingrediantsChange.next(this.ingredients);
    this.ingredients.push(...ingredients);
  }


}

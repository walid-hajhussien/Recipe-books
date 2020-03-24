import { Injectable } from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantsChange =  new Subject<IngredientModel[]>();
  private readonly  ingredients: IngredientModel[];

  constructor() {
    this.ingredients = [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)];
  }

  getIngredients() {
    return this.ingredients;
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

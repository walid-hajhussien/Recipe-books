import { Injectable } from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private readonly  ingredients: IngredientModel[];

  constructor() {
    this.ingredients = [new IngredientModel('Apple', 5), new IngredientModel('Tomato', 10)];
  }

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}

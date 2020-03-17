import {IngredientModel} from './ingredient.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients: IngredientModel[];
  constructor(name: string, description: string, imageUrl: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}

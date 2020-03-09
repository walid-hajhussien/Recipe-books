import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: RecipeModel) {
    this.selectedRecipe = recipe;
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [];
  @Output() onSelectedRecipe = new EventEmitter<RecipeModel>();
  public test: string;

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onClickRecipe(recipe: RecipeModel) {
    this.onSelectedRecipe.emit(recipe);
  }

}

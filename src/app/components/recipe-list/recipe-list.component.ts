import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [];

  constructor(public recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onClickRecipe(recipe: RecipeModel, i: number) {
    // this.onSelectedRecipe.emit(recipe);
    // this.recipeService.getSelectedRecipes().emit(recipe);
    this.router.navigate([i],{relativeTo: this.activatedRoute});
  }

}

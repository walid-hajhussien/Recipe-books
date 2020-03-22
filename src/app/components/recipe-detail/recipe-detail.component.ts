import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   selectedRecipe: RecipeModel;
   id: number;
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipeById(this.id);
    });
  }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddIngredientsAction} from '../../store/shoppingListStore/shopping-list.actions';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: RecipeModel;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private router: Router, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private store: Store<AppStateInterface>) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipeById(this.id);
    });
  }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.store.dispatch(new AddIngredientsAction(this.selectedRecipe.ingredients));
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  };

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }


}

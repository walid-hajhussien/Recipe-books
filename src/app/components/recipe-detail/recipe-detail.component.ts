import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddIngredientsAction} from '../../store/shoppingListStore/shopping-list.actions';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import { map, switchMap} from 'rxjs/operators';
import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: RecipeModel;
  id: number;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map((params) => {
      return +params.id;
    }), switchMap((id) => {
      console.log(id);
      this.id = id;
      return this.store.select('recipe');
    }), map((recipeState: RecipeStateInterface) => {
      return recipeState.recipes[this.id];
    })).subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new AddIngredientsAction(this.selectedRecipe.ingredients));
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }


}

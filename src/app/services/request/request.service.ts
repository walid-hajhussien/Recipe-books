import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {AddRecipesAction} from '../../store/recipeStore/recipe.action';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private store: Store<AppStateInterface>) {
  }

  storeRecipes(): Observable<any> {
    const recipes: RecipeModel[] = this.recipeService.getRecipes();
    return this.http.put('https://recipe-books-2a969.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipes(): Observable<any> {
    return this.http.get<RecipeModel[]>('https://recipe-books-2a969.firebaseio.com/recipes.json').pipe(map((recipes) => {
      return recipes.map((recipe) => {
        recipe.ingredients = recipe.ingredients || [];
        return recipe;
      });
    }), tap((recipes) => {
      this.store.dispatch(new AddRecipesAction(recipes));
      // this.recipeService.setRecipes(recipes);
    }));
  }
}


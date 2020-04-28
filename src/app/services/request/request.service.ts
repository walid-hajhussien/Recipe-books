import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {FetchRecipesFailAction, FetchRecipesSuccessAction} from '../../store/recipeStore/recipe.action';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private fetch: boolean;

  constructor(private http: HttpClient, private recipeService: RecipeService, private store: Store<AppStateInterface>) {
  }

  get isFetch() {
    return this.fetch;
  }

  set isFetch(value: boolean) {
    this.fetch = value;
  }

  storeRecipes(recipes): Observable<any> {
    return this.http.put('https://recipe-books-2a969.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipes(): Observable<FetchRecipesSuccessAction | FetchRecipesFailAction> {
    return this.http.get<RecipeModel[]>('https://recipe-books-2a969.firebaseio.com/recipes.json').pipe(map((recipes) => {
      const newRecipes = recipes.map((recipe) => {
        recipe.ingredients = recipe.ingredients || [];
        return recipe;
      });
      this.fetch = true;
      return new FetchRecipesSuccessAction(newRecipes);
    }), catchError((error) => {
      const errorMessage = 'FAILED_FETCH_DATA';
      return of(new FetchRecipesFailAction(errorMessage));
    }));
  }
}


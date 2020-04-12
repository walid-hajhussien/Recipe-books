import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Observable} from 'rxjs';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
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
      this.recipeService.setRecipes(recipes);
    }));
  }
}


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
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


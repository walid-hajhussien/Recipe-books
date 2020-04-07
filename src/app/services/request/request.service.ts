import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {Observable} from 'rxjs';

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
}

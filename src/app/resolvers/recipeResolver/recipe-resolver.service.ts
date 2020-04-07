import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeModel} from '../../models/recipe.model';
import {RequestService} from '../../services/request/request.service';
import {RecipeService} from '../../services/recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<RecipeModel[]> {

  constructor(private requestService: RequestService, private recipeService: RecipeService) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    if (this.recipeService.getRecipes().length > 0) {
     return ;
    }
    return this.requestService.fetchRecipes();
  }
}

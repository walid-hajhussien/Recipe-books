import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeModel} from '../../models/recipe.model';
import {RequestService} from '../../services/request/request.service';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {FetchRecipesAction, RecipeActionType} from '../../store/recipeStore/recipe.action';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<RecipeModel[]> {

  constructor(private requestService: RequestService, private store: Store, private actions$: Actions) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    if (this.requestService.isFetch) {
      return;
    }
    this.store.dispatch(new FetchRecipesAction());
    return this.actions$.pipe(ofType(RecipeActionType.FETCH_RECIPE_SUCCESS), take(1
    ));

  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeModel} from '../../models/recipe.model';
import {RequestService} from '../../services/request/request.service';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {FetchRecipesAction, RecipeActionType} from '../../store/recipeStore/recipe.action';
import {map, switchMap, take} from 'rxjs/operators';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<RecipeModel[]> {

  constructor(private requestService: RequestService, private store: Store<AppStateInterface>, private actions$: Actions) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
    // if (this.requestService.isFetch) {
    //   return;
    // }


    return this.store.select('recipe').pipe(take(1), switchMap((recipeState) => {
      if (recipeState.recipes.length === 0) {
        this.store.dispatch(new FetchRecipesAction());
        return this.actions$.pipe(ofType(RecipeActionType.FETCH_RECIPE_SUCCESS), take(1
        ));
      }
      return of([...recipeState.recipes]);
    }));

  }
}

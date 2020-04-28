import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {RecipeActionType} from './recipe.action';
import { switchMap,  withLatestFrom} from 'rxjs/operators';
import {RequestService} from '../../services/request/request.service';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';



@Injectable()
export class RecipeEffect {
  @Effect()
  fetchRecipes = this.actions$.pipe(ofType(RecipeActionType.FETCH_RECIPE), switchMap(() => {
    return this.requestService.fetchRecipes();
  }));

  @Effect({dispatch: false})
  storeRecipe = this.actions$.pipe(ofType(RecipeActionType.STORE_RECIPES), withLatestFrom(this.store.select('recipe')),
    switchMap(([actionData, recipeState]) => {
      return this.requestService.storeRecipes(recipeState.recipes);
    }));


  constructor(private actions$: Actions, private requestService: RequestService, private store: Store<AppStateInterface>) {
  }

}

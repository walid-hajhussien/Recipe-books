import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {RecipeActionType} from './recipe.action';
import {switchMap} from 'rxjs/operators';
import {RecipeService} from '../../services/recipe/recipe.service';
import {RequestService} from '../../services/request/request.service';


@Injectable()
export class RecipeEffect {
  @Effect()
  fetchRecipes = this.actions$.pipe(ofType(RecipeActionType.FETCH_RECIPE), switchMap(() => {
    return this.requestService.fetchRecipes();
  }));

  constructor(private actions$: Actions, private requestService: RequestService) {
  }

}

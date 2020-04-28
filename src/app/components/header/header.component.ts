import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from '../../services/request/request.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {map} from 'rxjs/operators';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {LogoutAction} from '../../store/authStore/auth.action';
import {FetchRecipesAction, StoreRecipesAction} from '../../store/recipeStore/recipe.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated = false;

  constructor(
    private requestService: RequestService,
    private recipeService: RecipeService,
    private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').pipe(map((authState: AuthStateInterface) => {
      return authState.user;
    })).subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveRecipes() {
    this.store.dispatch(new StoreRecipesAction());
  }

  onFetchRecipes() {
    this.store.dispatch(new FetchRecipesAction());
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
  }
}

import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {RequestService} from '../../services/request/request.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {map} from 'rxjs/operators';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {LogoutAction} from '../../store/authStore/auth.action';

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
    this.requestService.storeRecipes().subscribe((result) => {
      console.log('recipes saved : ', result);
    });
  }

  onFetchRecipes() {
    this.requestService.fetchRecipes().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
  }
}

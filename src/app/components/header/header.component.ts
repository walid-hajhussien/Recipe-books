import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {RequestService} from '../../services/request/request.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {map} from 'rxjs/operators';
import {AuthStateInterface} from '../../interfaces/store/auth-state-interface';
import {LogoutAction} from '../../store/authStore/auth.action';
import {FetchRecipesAction, StoreRecipesAction} from '../../store/recipeStore/recipe.action';
import {UpdateNetworkAction} from '../../store/networkStore/network.action';
import {ConnectionService} from 'ng-connection-service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  networkSubscription: Subscription;
  isAuthenticated = false;
  isOnline: boolean;

  constructor(
    private requestService: RequestService,
    private recipeService: RecipeService,
    private store: Store<AppStateInterface>,
    private connectionService: ConnectionService,
    @Inject(PLATFORM_ID) private platformId
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isOnline = navigator.onLine;
    }
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      // user Subscription
      this.userSubscription = this.store.select('auth').pipe(map((authState: AuthStateInterface) => {
        return authState.user;
      })).subscribe((user) => {
        this.isAuthenticated = !!user;
      });

      // network Subscription
      this.networkSubscription = this.connectionService.monitor().subscribe((isConnected: boolean) => {
        this.isOnline = isConnected;
        this.store.dispatch(new UpdateNetworkAction(isConnected));
      });

    }


  }

  onSaveRecipes() {
    this.store.dispatch(new StoreRecipesAction());
  }

  onFetchRecipes() {
    this.store.dispatch(new FetchRecipesAction());
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userSubscription.unsubscribe();
      this.networkSubscription.unsubscribe();
    }

  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
  }
}

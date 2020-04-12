import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {RequestService} from '../../services/request/request.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private requestService: RequestService, private recipeService: RecipeService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject.subscribe((user) => {
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
      this.recipeService.setRecipes(result);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

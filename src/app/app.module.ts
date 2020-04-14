import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './components/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './components/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './directives/dropdown/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {SelectRecipeComponent} from './components/select-recipe/select-recipe.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {ErrorMessagePipe} from './pipes/errorMessage/error-message.pipe';
import {AuthInterceptor} from './interceptors/auth/auth.interceptor';
import {UserIdleModule} from 'angular-user-idle';
import {AlertComponent} from './DynamicComponents/alert/alert.component';
import {PlaceholderDirective} from './directives/placeholder/placeholder.directive';
import {RecipeModule} from './modules/recipeModule/recipe.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    ErrorMessagePipe,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 600, timeout: 10, ping: 300}),
    RecipeModule
  ],
  providers: [ErrorMessagePipe, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

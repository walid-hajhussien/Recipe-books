import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-books';
  private showRecipes: boolean;
  private showShoppingList: boolean;
  constructor() {
    this.showRecipes = true;
  }

  setShowIteam(name: string) {
    if (name === 'recipe') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (name === 'shopping-list') {
      this.showRecipes = false;
      this.showShoppingList = true;
    }
  }
    getShowShopping() {
     return this.showShoppingList;
    }

  getShowRecipes() {
     return this.showRecipes;
  }



}

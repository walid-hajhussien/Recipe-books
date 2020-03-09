import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-books';
  private showRecipes: boolean;
  private showShopping: boolean;
  constructor() {
    this.showRecipes = true;
  }

  setShowIteam(name: string) {
    if (name === 'recipe') {
      this.showRecipes = true;
      this.showShopping = false;
    } else {
      this.showRecipes = false;
      this.showShopping = true;
    }
  }
    getShowShopping() {
     return this.showShopping;
    }

  getShowRecipes() {
return this.showRecipes;
  }



}

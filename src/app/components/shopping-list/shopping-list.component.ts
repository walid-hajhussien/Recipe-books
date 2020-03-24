import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  isChangeIngrediants: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
   this.isChangeIngrediants = this.shoppingListService.ingrediantsChange.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.isChangeIngrediants.unsubscribe();
  }
}

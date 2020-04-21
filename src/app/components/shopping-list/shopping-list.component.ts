import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<ShoppingListStateInterface>;
  isChangeIngrediants: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{ shoppingList: ShoppingListStateInterface }>) {
  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.isChangeIngrediants = this.shoppingListService.ingrediantsChange.subscribe((ingredients: IngredientModel[]) => {
    //   this.ingredients = ingredients;
    // });
  }

  ngOnDestroy(): void {
    this.isChangeIngrediants.unsubscribe();
  }

  onEditItem(id: number) {
    this.shoppingListService.startingEdit.next(id);
  }
}

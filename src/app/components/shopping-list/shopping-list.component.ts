import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {StartEditIngredientAction} from '../../store/shoppingListStore/shopping-list.actions';
import {EditIngredientTrigger} from '../../animations/shoppingList/shoppingList.trigger';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    EditIngredientTrigger
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<ShoppingListStateInterface>;
  editIngredientTrigger = 0;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {
  }

  onEditItem(id: number) {
    this.store.dispatch(new StartEditIngredientAction(id));
  }
}

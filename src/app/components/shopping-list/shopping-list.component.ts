import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ShoppingListStateInterface} from '../../interfaces/store/shopping-list-state-interface';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {StartEditIngredientAction} from '../../store/shoppingListStore/shopping-list.actions';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('editListTrigger', [
      state('0', style({opacity: 1, transform: 'translateX(0px)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-100px)'}),
        animate(500)
      ]),
      transition('* => void', [
        group([
          animate(200, style({ color: 'red'})),
          animate(500, style({opacity: 0, transform: 'translateX(300px)'}))
        ])
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<ShoppingListStateInterface>;
  editListTrigger = 0;

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

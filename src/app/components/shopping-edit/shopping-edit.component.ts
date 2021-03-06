import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {
  AddIngredientAction,
  DeleteIngredientsAction,
  StopEditIngredientAction,
  UpdateIngredientsAction
} from '../../store/shoppingListStore/shopping-list.actions';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('formObject', {static: true}) formObject: NgForm;
  subscription: Subscription;
  editMode = false;
  editItem: IngredientModel;

  constructor( private store: Store<AppStateInterface>) {
    console.log(this.formObject);
  }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe((state) => {
      if (state.editedIngredient) {
        this.editMode = true;
        this.editItem = {...state.editedIngredient};
        this.formObject.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });

      } else {
        this.editMode = false;
      }


    });

  }

  onSubmitIngredient(formObject: NgForm) {
    const newIngredient = new IngredientModel(formObject.value.name, formObject.value.amount);
    if (this.editMode) {
      this.store.dispatch(new UpdateIngredientsAction(newIngredient));
    } else {
      this.store.dispatch(new AddIngredientAction(newIngredient));
    }
    this.onClear();
  }

  ngOnDestroy(): void {
    this.onClear();
    this.subscription.unsubscribe();
  }

  onClear() {
    this.store.dispatch(new StopEditIngredientAction());
    this.editMode = false;
    this.formObject.reset();
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredientsAction());
    this.onClear();
  }

}

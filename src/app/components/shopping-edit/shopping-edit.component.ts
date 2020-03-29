import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {FormsModule, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('formObject', {static: true}) formObject: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: IngredientModel;
  constructor(private shoppingListService: ShoppingListService) {
    console.log(this.formObject);
  }

  ngOnInit(): void {
    console.log(this.formObject)
    this.subscription = this.shoppingListService.startingEdit.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredientByIndex(index);
      this.formObject.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  onSubmitIngredient(formObject: NgForm) {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, new IngredientModel( formObject.value.name, formObject.value.amount));
      formObject.reset();
    } else {
      this.shoppingListService.addIngredient(new IngredientModel( formObject.value.name, formObject.value.amount));
      formObject.reset();
    }
    this.editMode = false;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

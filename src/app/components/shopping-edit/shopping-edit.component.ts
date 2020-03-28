import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shoppingList/shopping-list.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('formObject', {static: true}) formObject: NgForm;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    console.log(this.formObject);
  }

  onAddIngredient(formObject: NgForm) {

    console.log(formObject);
    this.shoppingListService.addIngredient(new IngredientModel( formObject.value.name, formObject.value.amount));
  }

}

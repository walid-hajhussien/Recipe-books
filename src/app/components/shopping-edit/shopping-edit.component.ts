import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() ingredient = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.ingredient.emit(new IngredientModel(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}

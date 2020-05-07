import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [
    trigger('editRecipeTrigger', [
      state('0', style({opacity: 1, transform: 'translateX(0px)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-100px)'}),
        animate(500)
      ])
    ])
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() index: number;
  editRecipeTrigger = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

}

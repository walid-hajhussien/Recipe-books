import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('editRecipeTrigger', [
      state('0', style({opacity: 1, transform: 'translateX(0px)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-100px)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({opacity: 0, transform: 'translateX(200px)'}))
      ])
    ])
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<RecipeStateInterface>;
  editRecipeTrigger = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.recipes = this.store.select('recipe');
  }

  onClickRecipe(i: number) {
    this.router.navigate([i], {relativeTo: this.activatedRoute});
  }

  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}

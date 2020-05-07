import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';
import {EditRecipeTrigger} from '../../animations/recipe/editRecipe.trigger';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    EditRecipeTrigger
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

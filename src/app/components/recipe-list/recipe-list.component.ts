import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {RecipeStateInterface} from '../../interfaces/store/recipe-state-interface';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<RecipeStateInterface>;

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

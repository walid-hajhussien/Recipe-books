import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../services/recipe/recipe.service';
import {RecipeModel} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  formObject: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
    this.editMode = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.id);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (this.editMode) {
      const recipe: RecipeModel = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageUrl;
      recipeDescription = recipe.description;
      // add ingredients
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, [Validators.required]),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }


    this.formObject = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients

    });


    console.log((this.formObject.get('ingredients') as FormArray).controls);
  }

  onSubmit() {
    const recipe = new RecipeModel(this.formObject.value.name, this.formObject.value.description, this.formObject.value.imagePath, this.formObject.value.ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);

    } else {
      this.recipeService.addRecipe(recipe);

    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  getFormControl(name: string) {
    return (this.formObject.get(name) as FormArray).controls;
  }

  onAddIngredient() {
    (this.formObject.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));

  }

  onCancelEdit() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }


  onDelete() {
    if(this.editMode) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }else{

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from 'app/recipes/recipes.service';
import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private recipesService:RecipesService,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
         this.id = +params['id'];
         this.editMode = params['id'] != null;
         this.initForm();
      }
    );
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['desc'],
      this.recipeForm.value['imgURL'],
      this.recipeForm.value['ingredients']
    );
    if(this.editMode)
      this.recipesService.updateRecipe(this.id,newRecipe);
    else
      this.recipesService.addRecipe(newRecipe);
    this.onCancel();
  }

  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDesc = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
          }));
        }
        
      }
    }

    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'desc':new FormControl(recipeDesc,Validators.required),
      'imgURL':new FormControl(recipeImgPath,Validators.required),
      'ingredients':recipeIngredients
    });
  }

  onCancel(){
    this.router.navigate(['../']);
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}

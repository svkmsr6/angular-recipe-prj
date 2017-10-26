import { Injectable, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http,Response } from '@angular/http';

@Injectable()
export class RecipesService implements OnInit{

  recipesChanged = new Subject<Recipe[]>();
  
  private recipeList:Recipe[]=[];

  constructor(private slService:ShoppingListService,private http:Http) {}

  getRecipe(id:number){
    return this.recipeList[id];
  }

  ngOnInit(){
         
  }

  setRecipes(recipes:Recipe[]){
        this.recipeList = recipes;
        this.recipesChanged.next(this.recipeList.slice());
  }

  getRecipes(){
    //slice is used to send a copy of the array 
    //so that original array remains untouched
    return this.recipeList.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
      this.recipeList.push(recipe);
      this.recipesChanged.next(this.recipeList.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
      this.recipeList[index] = newRecipe;
      this.recipesChanged.next(this.recipeList.slice());
  }

  deleteRecipe(index:number){
    this.recipeList.splice(index,1);
    this.recipesChanged.next(this.recipeList.slice());
}

}

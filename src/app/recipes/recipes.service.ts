import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipeList:Recipe[] = [
    new Recipe(
      'Malai Curry',
      'Bengali Prawn Dish',
      'http://www.ndtv.com/cooks/images/chingri.malai.curry_620.jpg',
      [
        new Ingredient('Prawn',20),
        new Ingredient('Coconut',2),
        new Ingredient('Poppy',200),
      ]
    ),
    new Recipe(
      'Chitranna',
      'South Indian Lemon Rice',
      'http://saltandspice.org/wp-content/uploads/2010/09/lemon-rice11.jpg',
      [
        new Ingredient('Lemon',10),
        new Ingredient('Groundnut',400),
        new Ingredient('Curry Leaves',50),
      ]
    )
  ];
  constructor(private slService:ShoppingListService) { }

  getRecipes(){
    //slice is used to send a copy of the array 
    //so that original array remains untouched
    return this.recipeList.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

}

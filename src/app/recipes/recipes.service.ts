import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  recipeList:Recipe[] = [
    new Recipe('Malai Curry','Bengali Prawn Dish','http://www.ndtv.com/cooks/images/chingri.malai.curry_620.jpg'),
    new Recipe('Chitranna','South Indian Lemon Rice','http://saltandspice.org/wp-content/uploads/2010/09/lemon-rice11.jpg'),
    new Recipe('Litti-Chokha','Bihari Delicacy','http://www.recipe4kitchen.com/wp-content/uploads/2015/08/Litti_chokha.jpg')
  ];
  constructor() { }

  getRecipes(){
    //slice is used to send a copy of the array 
    //so that original array remains untouched
    return this.recipeList.slice();
  }

}

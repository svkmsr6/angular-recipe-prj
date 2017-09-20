import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('Rice',45),
    new Ingredient('Spices',15),
    new Ingredient('Veggies',20)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}

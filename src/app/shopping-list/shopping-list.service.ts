import { Injectable } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    /* let self = this;
    ingredients.forEach((ingredient)=>{
      self.addIngredient(ingredient);
    }); */
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}

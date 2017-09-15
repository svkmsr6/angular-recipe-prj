import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('Rice',45),
    new Ingredient('Spices',15),
    new Ingredient('Veggies',20)
  ];

  constructor() { }

  ngOnInit() {
  }

}

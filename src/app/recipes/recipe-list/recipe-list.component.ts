import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList:Recipe[] = [
    new Recipe('Malai Curry','Bengali Prawn Dish','http://www.ndtv.com/cooks/images/chingri.malai.curry_620.jpg'),
    new Recipe('Chitranna','South Indian Lemon Rice','http://saltandspice.org/wp-content/uploads/2010/09/lemon-rice11.jpg'),
    new Recipe('Litti-Chokha','Bihari Delicacy','http://www.recipe4kitchen.com/wp-content/uploads/2015/08/Litti_chokha.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipeList:Recipe[];

  constructor(
      private recipesService:RecipesService,
      private router:Router,
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}

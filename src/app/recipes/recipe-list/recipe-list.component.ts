import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
 
  recipeList:Recipe[];
  recipeSubscription:Subscription;

  constructor(
      private recipesService:RecipesService,
      private router:Router,
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscription = this.recipesService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipeList = recipes;
      }
    );
    this.recipeList = this.recipesService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }
}

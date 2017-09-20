import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

}

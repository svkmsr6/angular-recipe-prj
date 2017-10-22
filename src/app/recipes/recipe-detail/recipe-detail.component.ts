import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipesService } from 'app/recipes/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe:Recipe;
  id:number;

  constructor(private recipeService:RecipesService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
     this.route.params.subscribe(
       (params:Params)=>{
          this.id = +params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.id);
     });
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'],{ relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

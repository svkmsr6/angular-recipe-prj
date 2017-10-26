import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "app/recipes/recipes.service";
import { Recipe } from "app/recipes/recipe.model";
import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataStorageService{

    gotRecipes:Subject<Recipe[]>;    
    constructor(private http:Http, private recipeService:RecipesService){

    }

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-efd23.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-efd23.firebaseio.com/recipes.json')
            .map(
                (response:Response)=>{
                    const recipes = response.json();
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[])=>{                    
                    this.recipeService.setRecipes(recipes);                    
                }
            );
    }
}
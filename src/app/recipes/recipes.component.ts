import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'app/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']  
})
export class RecipesComponent implements OnInit {  

  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
   
  }

}

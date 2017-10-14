import { NgModule } from "@angular/core";
import { Route, Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [{
    path: 'recipes',
    component: RecipesComponent,
    children: [
        {
            path: '',
            component: RecipeStartComponent,
            pathMatch: 'full'
        },
        {
            path: 'new',
            component: RecipeEditComponent            
        },
        {
            path: ':id',
            component: RecipeDetailComponent            
        },       
        {
            path: ':id/edit',
            component: RecipeEditComponent            
        }
    ]
}, {
    path: 'shopping-list',
    component: ShoppingListComponent
}, {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
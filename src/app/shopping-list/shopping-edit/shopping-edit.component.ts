import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') shoppingListForm:NgForm;
  editedItem: Ingredient;
  editMode: boolean = false;
  editedItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) { }

  subscription:Subscription;

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.editMode = true;
          this.shoppingListForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
          });
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(formObj:NgForm){
    const name = formObj.value.name;
    const amount = formObj.value.amount;

    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,new Ingredient(name,amount));      
    }
    else      
      this.shoppingListService.addIngredient(new Ingredient(name,amount));

    this.editMode = false;
    formObj.reset();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}

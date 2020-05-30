import { Component, OnInit, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from 'src/app/recipes/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild("nameInput", {static:false})  nameInputRef : ElementRef;
@ViewChild("amountInput",{static:false}) amountInputRef : ElementRef;
  
 constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    this.shoppingListService.addIngredientFromRecipe(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
    // this.shoppingListService.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
    // this.shoppingListService.addIngredient();
  }

}

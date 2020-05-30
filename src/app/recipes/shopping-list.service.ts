import { Ingredient } from '../shared/ingredient.module';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    public ingredientAdded = new EventEmitter<Ingredient>();

    private ingredients : Ingredient[]=[
        new Ingredient('Apple',10),
        new Ingredient('Mango',20)
    ];

    getIngredients(){
        return this.ingredients;
    }

    addIngredient(){
        this.ingredientAdded
            .subscribe(
              (ingredient : Ingredient)=>{
                this.ingredients.push(ingredient);
              }
            )
    
      }


      addIngredientFromRecipe(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }
}
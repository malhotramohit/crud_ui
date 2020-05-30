import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public recipeSelected = new EventEmitter<Recipe>();
    
    private   recipes : Recipe[] = [
          new Recipe('Recipe 1' , 'Simple test 1',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
          , [new Ingredient('Kali mirch',23),new Ingredient('Hari mirch',21)]),
          new Recipe('Recipe 2' , 'Simple test 2','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
          ,[new Ingredient('Peanut ',21),new Ingredient('Chicken',22)])
      
        ];
  
  
        getRecipes(){
            return this.recipes.slice();
        }

        getRecipe(index:number){
          return this.recipes[index];
        }
}

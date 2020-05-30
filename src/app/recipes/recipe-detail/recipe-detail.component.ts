import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute,private myService:MyserviceService , private router:Router) { }

  ngOnInit() {

    this.route.params
      .subscribe(params =>{
        this.id = params['id'];
        this.recipe = this.myService.getRecipe(this.id);
      })
  }

  addToShoppingList(recipe:Recipe){
    recipe.ingredients.forEach(
      (item) => {
        //this.shoppingListService.ingredientAdded.emit(item);
        //this.shoppingListService.addIngredient();
        this.shoppingListService.addIngredientFromRecipe(item);
      }
    );

  }

  onEditRoute(){
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo : this.route});
  }

}

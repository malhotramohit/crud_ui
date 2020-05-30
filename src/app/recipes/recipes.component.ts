import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers :[MyserviceService]
})
export class RecipesComponent implements OnInit {


  selectedRecipe : Recipe  

  constructor(private recipeService: MyserviceService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) =>{
        this.selectedRecipe=recipe;
      }
    )
  }

}

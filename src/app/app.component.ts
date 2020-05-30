import { Component } from '@angular/core';
import { ShoppingListService } from './recipes/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ShoppingListService]

})
export class AppComponent {
  name= 'Mohit';  

  loadedFeature = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}

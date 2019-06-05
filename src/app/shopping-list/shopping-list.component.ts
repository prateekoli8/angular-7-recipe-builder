import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
ingredientsSubscription: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredient();
    this.ingredientsSubscription = this.shoppingService.ingredientsChanged.subscribe(
      (changedIngredients: Ingredient[]) => {
        this.ingredients = this.shoppingService.getIngredient();
      }
    );
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }
}

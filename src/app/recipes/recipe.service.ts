import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe('Hot-Dog',
     'Plain ole Hot Dog',
      'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Sausage', 1),
        new Ingredient('Mustard Sauce', 1)
      ])
    , new Recipe
    ('Philly Cheesesteak',
    'Looks Good',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IULNKreAuw4efOWCL_YIjJtRqfSXYQmtyYo83AZo79ZYyr_W',
    [
      new Ingredient('Bun', 2 ),
      new Ingredient('Smashed Beef', 1 )
    ])
  ];

  constructor(private shoppingService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  ingredientsToShop(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToShop(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(deleteIndex: number) {
    this.recipes.splice(deleteIndex, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}

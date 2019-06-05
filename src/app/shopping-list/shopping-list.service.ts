import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [new Ingredient('Bun', 2) ,
  new Ingredient('Sausage', 1)
  ];


  onIngredientAdded(newIngr: Ingredient) {
    this.ingredients.push(newIngr);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getEditIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredientsToShop(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

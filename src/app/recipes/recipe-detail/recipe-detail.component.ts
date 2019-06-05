import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() displayRecipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.displayRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onRecipeEdit() {
   this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../'], this.id, ['edit'], {relativeTo: this.route});
  }
  toShoppingList() {
    this.recipeService.ingredientsToShop(this.displayRecipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

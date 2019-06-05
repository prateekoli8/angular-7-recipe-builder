import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
    private authService: AuthService) {}
storeRecipes() {

  // return this.httpClient.put('https://angular7-project-d4b73.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
  // {
  //   observe: 'body',
  //   params: new HttpParams().set('auth', token)
  // });
  const req = new HttpRequest('PUT', 'https://angular7-project-d4b73.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
   {
     reportProgress: true
   });
   return this.httpClient.request(req);
}
getRecipes() {
  // this.http.get<Recipe[]>('https://angular7-project-d4b73.firebaseio.com/recipes.json?auth=' + token)
  this.httpClient.get<Recipe[]>('https://angular7-project-d4b73.firebaseio.com/recipes.json', {
    observe: 'body',
    responseType: 'json'
  })
  .pipe(map(
    (recipes) => {
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }
  )
  ).subscribe(
  (recipes: Recipe[]) => {
    this.recipeService.setRecipes(recipes);
  }
  );
}

}

import { Component, OnInit } from '@angular/core';
import { FullRecipe } from '../types/FullRecipe';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

interface ApiResponse {
  recipe: FullRecipe;
}


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipe$: FullRecipe;
  recipeId: string; // ID passed via route parameters
  isLoading = false;
  errorOccured = false;

  constructor( 
    private data: RecipesService, 
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.route.params.subscribe( params => {
      this.recipeId = params.id;

      this.ngRedux.select( sel => sel.recipeCache.recipes )
      .subscribe( (recipes: FullRecipe[]) => {
        const recipe: FullRecipe = recipes.find( rec => rec.recipe_id === this.recipeId );
        console.log('recipe check ', recipe);

        if (recipe) {
          this.recipe$ = recipe;

          if (!recipe.ingredients) {
            this.getRecipe(true);
          }
        } else {
          this.getRecipe();
        }

      });
    }); // Set recipeId to be the id of the route parameters
  }

  getImgSrc() {
    return this.recipe$.image_url;
  }

  ngOnInit() {}

  public goToPreviousPage() {
    window.history.back();
  }
    
  getRecipe(ingredientsOnly: boolean = false) {
    console.log('getRecipe ', ingredientsOnly);

    if (!ingredientsOnly) {
      this.isLoading = true;
    }

    this.data
      .getRecipeById(this.recipeId, ingredientsOnly)
      .subscribe( (data: string[] | ApiResponse) => {

        if (ingredientsOnly) {
          this.recipe$.ingredients = data as string[];
        } else {
          const result = data as ApiResponse;
          
          this.recipe$ = result.recipe;
          this.isLoading = false;
        }
      },
      error => {
        this.errorOccured = true;
        console.log(error);
      });
  }
}

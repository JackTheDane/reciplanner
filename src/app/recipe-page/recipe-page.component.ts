import { Component, OnInit, Inject } from '@angular/core';
import { FullRecipe } from '../types/FullRecipe';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState, CacheState } from '../store';

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

  constructor( 
    private data: RecipesService, 
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.route.params.subscribe( params => this.recipeId = params.id ); // Set recipeId to be the id of the route parameters
  }

  getImgSrc() {
    return this.recipe$.image_url;
  }

  ngOnInit() {

    this.ngRedux.select( sel => sel.recipeCache.recipes )
      .subscribe( (recipes: FullRecipe[]) => {
        const recipe: FullRecipe = recipes.find( rec => rec.recipe_id === this.recipeId );

        if (recipe && !recipe.ingredients) {
          this.recipe$ = recipe;
          this.getRecipe(true);
        } else if (!recipe) {
          this.getRecipe();
        }

      });

    }
    
  getRecipe(ingredientsOnly: boolean = false) {
    if (ingredientsOnly) {
      this.data
        .getRecipeById(this.recipeId, true)
        .subscribe( res => console.log(res));
    } else {
      this.data.getRecipeById( this.recipeId ).subscribe(
        (data: ApiResponse ) => this.recipe$ = data.recipe
      );
    }
  }
}

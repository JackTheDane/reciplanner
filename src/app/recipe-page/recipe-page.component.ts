import { Component, OnInit, Inject } from '@angular/core';
import { FullRecipe } from '../types/recipe-full';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor( private data: RecipesService, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => this.recipeId = params.id ); // Set recipeId to be the id of the route parameters
  }

  getImgSrc() {
    return this.recipe$.image_url;
  }

  ngOnInit() {
    this.data.getRecipeById( this.recipeId ).subscribe(
      (data: ApiResponse ) => { this.recipe$ = data.recipe; console.log( this.recipe$ ); }
    );
  }

}

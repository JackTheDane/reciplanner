import { Component, OnInit } from '@angular/core';
import { FullRecipe } from '../recipe-full';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
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

  ngOnInit() {
    this.data.getRecipeById( this.recipeId ).subscribe(
      (data: ApiResponse ) => { this.recipe$ = data.recipe; console.log( this.recipe$ ); }
    );
  }

}

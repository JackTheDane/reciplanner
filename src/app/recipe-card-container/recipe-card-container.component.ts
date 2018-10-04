import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

import { BasicRecipe } from '../recipe-basic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})

export class RecipeCardContainerComponent implements OnInit {

  recipes$: Array<BasicRecipe>;
  recipeContainer;
  query: string;

  constructor( private data: RecipesService, private route: ActivatedRoute ) {
    this.route.params.subscribe( 
        params => {
          this.query = params.query;
          this.data.getRecipesByQuery( this.query ).subscribe(
            (result: any) => this.recipes$ = result.recipes // Return the recipes retrieved from the api
          );
        }
    ); // Set search query to be the query based via the route parameters
  }

  ngOnInit() {
    this.recipeContainer = document.getElementsByClassName('recipe-card-container')[0];
  }
}

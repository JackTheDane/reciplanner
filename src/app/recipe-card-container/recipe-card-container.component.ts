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
  query: string;
  pageNumber: number;
  isLoading: boolean;

  constructor( private data: RecipesService, private route: ActivatedRoute ) {
    this.route.params.subscribe( 
      params => {
          this.isLoading = true;
          this.query = params.query;

          if ( params.pageNumber ) {
            this.pageNumber = params.pageNumber;
          }

          this.data.getRecipesByQuery( this.query, this.pageNumber ).subscribe(
            (result: any) => {
              this.isLoading = false;
              return this.recipes$ = result.recipes; // Return the recipes retrieved from the api
            } 
          );
        }
    ); // Set search query to be the query based via the route parameters
  }

  ngOnInit() {
  }

  // TODO: Add visual indicatior, that new recipes are being loaded
}

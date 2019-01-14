import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { FullRecipe } from '../types/FullRecipe';

import { NgRedux } from '@angular-redux/store';
import { IAppState, CacheState } from '../store';

import { IRecipeApiResponse } from '../types/IRecipeApiResponse';
import { CacheActions } from '../cache.actions';
import { BasicRecipe } from '../types/BasicRecipe';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})

export class FrontPageComponent {

  recipes$: FullRecipe[];
  query: string;
  pageNumber = 1;
  numberOfResponses: number;
  isLoading: boolean;

  cachedQuery: string;
  cachedPageNumber: number;
  
  constructor ( 
    private data: RecipesService, 
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>,
    private cacheActions: CacheActions
  ) {

    this.ngRedux
      .select( sel => sel.recipeCache )
      .subscribe( (cache: CacheState) => {
        this.recipes$ = cache.recipes;
        this.numberOfResponses = cache.recipes.length;
        this.cachedQuery = cache.query;
        this.cachedPageNumber = cache.pageNumber;
      });


    this.route.params.subscribe( params => {

      this.pageNumber = params.pageNumber ? params.pageNumber : 1;
      this.query = params.query ? params.query : '';
      
      if ( // If the query has changed from the cache
        this.cachedQuery !== this.query || 
        this.cachedPageNumber !== this.pageNumber 
      ) {

        console.log(this);

        this.isLoading = true;

        data
          .getRecipesByQuery(this.query, this.pageNumber)
          .subscribe( (response: {count: number, recipes: BasicRecipe[]}) => {
            console.log(response);
            this.isLoading = false;
            cacheActions.setCachedRecipes(response.recipes, this.query, this.pageNumber);
          });

      }
    });
  }
}

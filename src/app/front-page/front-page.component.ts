import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { BasicRecipe } from '../recipe-basic';

interface IRecipeApiResponse {
  count: number;
  recipes: BasicRecipe[];
}

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  recipes$: Array<BasicRecipe>;
  query: string;
  pageNumber = 1;
  numberOfResponses: number;
  isLoading: boolean;

  constructor ( private data: RecipesService, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      if ( params.pageNumber ) {
        this.pageNumber = params.pageNumber;
      }
      if ( params.query ) {
        this.query = params.query; // Set search query to be the query based via the route parameters
      }

      this.isLoading = true;

      this.data.getRecipesByQuery( this.query, this.pageNumber ).subscribe(
        (result: IRecipeApiResponse) => {
          this.isLoading = false;
          this.numberOfResponses = result.count;
          return this.recipes$ = result.recipes; // Return the recipes retrieved from the api
        } 
      );
    }); 
  }

  ngOnInit() {
  }

}

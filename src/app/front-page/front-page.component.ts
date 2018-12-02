import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { BasicRecipe } from '../recipe-basic';

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

interface IRecipeApiResponse {
  count: number;
  recipes: BasicRecipe[];
}

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})

export class FrontPageComponent {

  recipes$: Array<BasicRecipe>;
  query: string;
  pageNumber = 1;
  numberOfResponses: number;
  isLoading: boolean;
  temp: any;

  
  constructor ( 
    private data: RecipesService, 
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.route.params.subscribe( params => {

      this.pageNumber = params.pageNumber;
      this.query = params.query;

      ngRedux.select( res => res.userInfo.ratings ).subscribe( ratings => {
        this.temp = ratings.map( e => `Id: ${e.id} and rating: ${e.rating}` ).join('    ');
      });

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


}

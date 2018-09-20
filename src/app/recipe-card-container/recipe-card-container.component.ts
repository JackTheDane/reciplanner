import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})
export class RecipeCardContainerComponent implements OnInit {

  recipes$: Array<Recipe>;

  constructor( private data: RecipesService ) { }

  ngOnInit() {
    this.data.getRecipesByQuery('chicken').subscribe(
      (result: any) => this.recipes$ = result.recipes // Return the recipes retrieved from the api
    );
  }

}

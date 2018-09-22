import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

import { BasicRecipe } from '../recipe-basic';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})
export class RecipeCardContainerComponent implements OnInit {

  recipes$: Array<BasicRecipe>;
  recipeContainer;

  constructor( private data: RecipesService ) { }

  ngOnInit() {
    this.data.getRecipesByQuery().subscribe(
      (result: any) => this.recipes$ = result.recipes // Return the recipes retrieved from the api
    );

    this.recipeContainer = document.getElementsByClassName('recipe-card-container')[0];
  }
}

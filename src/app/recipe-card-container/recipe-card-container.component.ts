import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

import { IRecipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-card-container',
  templateUrl: './recipe-card-container.component.html',
  styleUrls: ['./recipe-card-container.component.scss']
})
export class RecipeCardContainerComponent implements OnInit {

  recipes$: Array<IRecipe>;

  constructor( private data: RecipesService ) { }

  ngOnInit() {
    this.data.getRecipesByQuery('chicken').subscribe(
      (result: any) => this.recipes$ = result.hits.map( e => e.recipe ) // Return the recipes retrieved from the api
    )
  }

}

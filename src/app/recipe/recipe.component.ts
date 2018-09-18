import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface IRecipe {
  title: string;
  subtitle? :string;
  imgUrl? :string;
  description? :string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe$: IRecipe;
  
  recipeId$: string;

  constructor(private data: RecipesService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.recipeId$ = params.id )
  }

  ngOnInit() {
    this.data.getRecipeByid( this.recipeId$ ).subscribe(
      (data: any) => {
        // this.recipe$ = data
        console.log('qwdasdsad');
      }
    )
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { FullRecipe } from '../recipe-full';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface ApiResponse {
  recipe: FullRecipe;
}

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  // @Input()
  // recipe_id: string;
  
  // @Input()
  // title: string;

  // @Input()
  // image_url: string;

  // @Input()
  // social_rank: string;

  // @Input()
  // publisher: string;

  // @Input()
  // source_url: string;

  // @Input()
  // publisher_url: string;

  recipe$: FullRecipe;
  recipeId: string; // ID passed via route parameters

  // constructor( private data: RecipesService, private route: ActivatedRoute ) {
  //   this.route.params.subscribe( params => this.recipeId = params.id ); // Set recipeId to be the id of the route parameters
  // }

  constructor( dialogRef: MatDialogRef<RecipePageComponent>, @Inject(MAT_DIALOG_DATA) public data: FullRecipe ) {

  }

  ngOnInit() {
    this.recipe$ = this.data;

    // this.data.getRecipeById( this.recipeId ).subscribe(
    //   (data: ApiResponse ) => { this.recipe$ = data.recipe; console.log( this.recipe$ ); }
    // );
  }

}

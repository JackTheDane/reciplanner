import { Component, OnInit, Input } from '@angular/core';
import { BasicRecipe } from '../types/recipe-basic';
import { AppActions } from '../app.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {

  @Input()
  recipe: BasicRecipe;

  public isFavorite = false;

  constructor(
    private appActions: AppActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux
      .select(res => res.userInfo.savedRecipes)
      .subscribe(
        (savedRecipes: BasicRecipe[]) => {

          if (savedRecipes) {
            console.log(savedRecipes);
            console.log( savedRecipes.map( e => e.title ) );
  
            savedRecipes.forEach( reci => {
              this.isFavorite = reci.recipe_id === this.recipe.recipe_id;
            });
          }

          // console.log( savedRecipes.some( rec => rec.recipe_id === this.recipe.recipe_id ) );
          // this.isFavorite = !savedRecipes.some( rec => rec.recipe_id === this.recipe.recipe_id ) ? false : true;
        },
        error => console.log(error)
      );
  }

  ngOnInit() {}

  getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.recipe.image_url + ')'
    };
  }

  getTitleText() {
    if ( this.recipe.title.length > 45 ) {
      return this.recipe.title.substr(0, 43) + '...';
    }

    return this.recipe.title;
  }

  public saveRecipe() {
    console.log(this.recipe);
    this.appActions.saveRecipe(this.recipe);
  }
}

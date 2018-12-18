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
  ) {}

  ngOnInit() {
    this.ngRedux
      .select(res => res.userInfo.savedRecipes)
      .subscribe(
        (savedRecipes: BasicRecipe[]) => {

          if (savedRecipes && this.recipe) {
            this.isFavorite = !savedRecipes.some( rec => rec.recipe_id === this.recipe.recipe_id ) ? false : true;
          }
        },
        error => console.log(error)
      );
  }

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
    this.appActions.saveRecipe(this.recipe);
  }

  public removeRecipe() {
    this.appActions.removeSavedRecipe(this.recipe.recipe_id);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { BasicRecipe } from '../types/BasicRecipe';
import { UserActions } from '../user.actions';
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
    private userActions: UserActions,
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

  // TODO: Improve function use
  // TODO: Make favorite button into its own component
  
  private getBackgroundImage() {
    return {
      'background-image' : 'url(' + this.recipe.image_url + ')'
    };
  }
  
  public getFavoriteButtonColor(): string {
    return !this.isFavorite
    ? 'primary'
    : 'accent';
  }
  
  public getFavoriteButtonTitle(): string {
    return !this.isFavorite
    ? 'Add to favorites'
    : 'Remove from favorites';
  }
  
  public getFavoriteButtonIcon(): string {
    return !this.isFavorite
    ? 'bookmark_border'
    : 'bookmark';
  }
  
  // BUG: Setting class breaks 
  public getFavoriteButtonClass(): string {
    return !this.isFavorite
      ? 'favoriteButton'
      : 'unFavoriteButton';
  }

  public toggleFavorite() {
    if (!this.isFavorite) {
      this.userActions.saveRecipe(this.recipe);
    } else {
      this.userActions.removeSavedRecipe(this.recipe.recipe_id);
    }
  }
}

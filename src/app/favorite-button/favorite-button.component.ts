import { Component, OnInit, Input } from '@angular/core';
import { UserActions } from '../user.actions';
import { FullRecipe } from '../types/FullRecipe';
import { NgRedux } from '@angular-redux/store';
import { IAppState, UserState } from '../store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})

export class FavoriteButtonComponent implements OnInit {

  color: string;
  title: string;
  icon: string;
  class: string;

  isFavorite = false;
  isLoggedIn = false;

  @Input()
  recipe: FullRecipe;

  constructor(
    private userActions: UserActions,
    private ngRedux: NgRedux<IAppState>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.ngRedux
      .select(res => res.userInfo)
      .subscribe(
        (userInfo: UserState) => {
          if (userInfo && userInfo.savedRecipes && this.recipe) {
            this.isFavorite = !userInfo.savedRecipes.some( rec => rec.recipe_id === this.recipe.recipe_id ) ? false : true;
            this.updateButtonValues(this.isFavorite);
            this.isLoggedIn = userInfo.isLoggedIn;
          }
        },
        error => console.log(error)
      );
  }

  private updateButtonValues(isFavorite: boolean) {
    if (!isFavorite) {
      this.color = 'accent';
      this.title = 'Add favorite';
      this.icon = 'bookmark_border';
      this.class = 'favoriteButton';
    } else {
      this.color = 'primary';
      this.title = 'Remove favorite';
      this.icon = 'bookmark';
      this.class = 'unFavoriteButton';
    }
  }

  public toggleFavorite() {
    if (this.isLoggedIn) {

      if (!this.isFavorite) {
        this.userActions.saveRecipe(this.recipe);

        this.openSnackBar('Added favorite!');

      } else {
        this.userActions.removeSavedRecipe(this.recipe.recipe_id);

        this.openSnackBar('Removed favorite');

      }
      
    } else {
      this.openSnackBar('Please register in order to save recipes', 4000);
      this.router.navigate(['/join']);      
    }
  }

  private openSnackBar(message: string, duration: number = 2000) {
    this.snackBar.open(message, '', {
      duration: duration
    });
  }

  // public getFavoriteButtonColor(): string {
  //   return !this.isFavorite
  //   ? 'primary'
  //   : 'accent';
  // }
  
  // public getFavoriteButtonTitle(): string {
  //   return !this.isFavorite
  //   ? 'Add favorite'
  //   : 'Remove favorite';
  // }
  
  // public getFavoriteButtonIcon(): string {
  //   return !this.isFavorite
  //   ? 'bookmark_border'
  //   : 'bookmark';
  // }
  
  // // BUG: Setting class breaks 
  // public getFavoriteButtonClass(): string {
  //   return !this.isFavorite
  //     ? 'favoriteButton'
  //     : 'unFavoriteButton';
  // }

}

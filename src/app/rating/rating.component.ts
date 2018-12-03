import { Component, Input } from '@angular/core';
import { IAppState } from '../store';
import { UserActions } from '../user.actions';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {

  // TODO: Once redux has been setup, add rating support for a recipe, by clicking on a star
  // TODO: Add testing to the ranking module, once redux has been setup

  @Input()
  social_rank: number; // Is expected to be number between 0 and 100

  @Input()
  ratedNumber: number; // Is a number between 1 and 5. Can be null.

  @Input()
  id: string; // Id of the recipe the rating is used for.

  constructor(
    private userActions: UserActions,
    private ngRedux: NgRedux<IAppState>,
  ) {
    this.social_rank = Math.round( this.social_rank );
  }

  getHalfStarVisible(rating) {
    return Math.round(rating) > rating;
  }

  // TODO: Implement custom colours for positive, ok and negative
  // TODO: Implement custom hover colour changes depending on rating

  handleStarClickChange(e: { rating: number }) {
    console.log('Click', e);

    this.userActions.addRating({
      id: this.id,
      rating: (e.rating * 20)
    });
  }

  handleStarHoverChange(e: { hoverRating: number }) {
    if (e.hoverRating > 0) {
      console.log('Hover', e);
    }
  }
}

// import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { UserActions } from './user.actions';
import { UserState } from './store';
import { IRating } from './IRating';

const INITIAL_STATE: UserState = {
  name: 'Bob',
  isLoggedIn: true,
  ratings: []
};

export function userReducer(state: UserState = INITIAL_STATE, action: any) {
 switch (action.type) {
  // case UserActions.FAILED_DELETE_SITTER: // payload: string
  //   return tassign(state, {errorMessage: action.payload});
    
    case UserActions.ADD_RATING: { // action.payload : Rating
      const passedRating = action.payload as IRating; // Get the payload
      const ratingsCopy = [...state.ratings]; // Get a copy of the ratings
      const index = ratingsCopy // Get the index of the rating with a matching id
      .findIndex(sitter => sitter.id === passedRating.id);
      
      // If the index === -1, no match was found. Create new rating.
      if ( index === -1 ) {
        ratingsCopy.push(passedRating as IRating);
      } else { // If the index was found, overwrite matching rating
        ratingsCopy[index] = passedRating;
      }

      return tassign(state, { ratings: ratingsCopy}); // Return new state
    }

    case UserActions.DELETE_RATING: { // action.payload : string = RatingId
      const id = action.payload as string;
      const ratingsCopy = [...state.ratings]; // Get a copy of the ratings
      const index = ratingsCopy // Get the index of the rating with a matching id
        .findIndex(sitter => sitter.id === id);

      ratingsCopy.splice(index, 1); // Remove the rating that matches the index
      return tassign(state, { ratings: ratingsCopy}); // Return new state      
    }  
  
    default:
      return state;
  }
}

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
      const pl = action.payload as IRating; // Get the payload
      const ratingsCopy = [...state.ratings]; // Get a copy of the ratings
      const index = state.ratings // Get the index of the rating with a matching id
      .findIndex(sitter => sitter.id === pl.id);
      
      // If the index === -1, no match was found. Create new rating.
      if ( index === -1 ) {
        ratingsCopy.push(pl as IRating);
      } else { // If the index was found, overwrite matching rating
        ratingsCopy[index] = pl;
      }

      return tassign(state, { ratings: ratingsCopy}); // Return new state
  }

  // case UserActions.CREATE_SITTER_FAILURE:
  //   return tassign(state, { isLoading: false });

  // case UserActions.CREATE_SITTER_SUCCESS:
  //   // Write code to copy the array and add the new sitter to the copy.
  //   // sitter obj. should be in action.payload
  //   //state.sitters.push() // NoNo => modifies state.
  //   // // YES YES, because it copies the original array

  //   const newArray = [...state.sitters, action.payload]; 
  //   // console.log(newArray);
  //   // return tassign(state, {sitters: state.sitters.push(action.payload) });
  //   return tassign(state, {sitters: newArray, isLoading: false });

  // case UserActions.DELETE_SITTER: // action.payload is an id: String
  //   return tassign(state, {sitters: state.sitters.filter(x => x.sitterId !== action.payload)});

  // case UserActions.SET_IS_BABY:
  //   // pure function
  //   // state.isBaby = action.payload; // No No.
  //   // return state;
    
  //   // return Object.assign({}, state, {iszBaby: action.payload}); //Yes
  //   return tassign(state, { isBaby: action.payload }); // Yes Yes
  
  
    default:
      return state;
  }
}

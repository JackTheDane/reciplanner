// import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { AppActions } from './app.actions';
import { UserState } from './store';
import { IRating } from './types/IRating';
import { BasicRecipe } from './types/recipe-basic';

const INITIAL_STATE: UserState = {
  isLoggedIn: true,
  ratings: [],
  savedRecipes: []
};

export function appReducer(state: UserState = INITIAL_STATE, action: {type: string; payload: any}) {
 switch (action.type) {
  // case UserActions.FAILED_DELETE_SITTER: // payload: string
  //   return tassign(state, {errorMessage: action.payload});
    
    case AppActions.ADD_RATING: { // action.payload : Rating
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

    case AppActions.SET_LOGIN: { // action.payload: Boolean
      return tassign(state, {isLoggedIn: action.payload});
    }

    case AppActions.ADD_SAVED_RECIPE: { // action.payload: BasicRecipe
      const recipes = [...state.savedRecipes];
      if ( !recipes.some( rec => rec.recipe_id === action.payload.recipe_id ) ) {
        recipes.push(action.payload);
      }
      return tassign(state, {savedRecipes: recipes});
    }

    case AppActions.REMOVE_SAVED_RECIPE: { // action.payload: recipe_id: string
      let recipes = [...state.savedRecipes];

      recipes = recipes.filter( rec => rec.recipe_id !== action.payload);

      console.log('Init ', state.savedRecipes);
      console.log('filtered ', recipes);

      return tassign(state, {savedRecipes: recipes});
    }
  
    default:
      return state;
  }
}

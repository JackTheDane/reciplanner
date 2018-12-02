// import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { UserActions } from './user.actions';
import { UserState } from './store';
import { IRating } from './IRating';

const INITIAL_STATE: UserState = {
  // isBaby: undefined,
  name: 'Bob',
  isLoggedIn: true,
  ratings: []
  // sitters: TempDataService.getSitters(), 
  // errorMessage: '', 
  // isLoading: false 
}; // 

export function userReducer(state: UserState = INITIAL_STATE, action: any) {
 switch (action.type) {
  // case UserActions.FAILED_DELETE_SITTER: // payload: string
  //   return tassign(state, {errorMessage: action.payload});

  // case UserActions.UPDATE_SITTER: // action.payload : Sitter
  //   // const updateArray = [...state.sitters];
  //   const index = state.sitters.findIndex(sitter => sitter.sitterId === action.payload.sitterId);
  //   // updateArray[index] = action.payload;
  //   return state;
  //   // return tassign(state, { sitters: state.sitters.set(index, action.payload)});

  case UserActions.CREATE_RATING: // action.payload : Rating
    const ratingsCopy = [...state.ratings];
    ratingsCopy.push(action.payload as IRating);
    // return Object.assign({}, state, { isLoading: true });
    return tassign(state, { ratings: ratingsCopy });

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

// import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { CacheActions } from './cache.actions';
import { CacheState } from './store';
import { FullRecipe } from './types/FullRecipe';

const INITIAL_STATE: CacheState = {
  query: null,
  recipes: []
};

export function CacheReducer(state: CacheState = INITIAL_STATE, action: {type: string; payload: any}) {
 switch (action.type) {

    case CacheActions.SET_CACHED_RECIPES: { // action.payload: FullRecipe[]
      return tassign(state, { recipes: action.payload });
    }
  
    default:
      return state;
  }
}

// import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { CacheActions } from './cache.actions';
import { CacheState } from './store';
import { FullRecipe } from './types/FullRecipe';

const INITIAL_STATE: CacheState = {
  query: null,
  pageNumber: 1,
  recipes: []
};

export function CacheReducer(state: CacheState = INITIAL_STATE, action: {type: string; payload: any}) {
 switch (action.type) {

    case CacheActions.SET_CACHED_RECIPES: { // action.payload: {recipes: FullRecipe[], query: string, pageNumber: number}
      return tassign(state, action.payload as CacheState);
    }
  
    default:
      return state;
  }
}

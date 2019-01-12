// import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';

// Reducers
import { UserReducer } from './user.reducer';

// Types
import { IRating } from './types/IRating';
import { BasicRecipe } from './types/BasicRecipe';
import { FullRecipe } from './types/FullRecipe';
import { CacheReducer } from './cache.reducer';

export interface UserState {
  name?: string;
  ratings: IRating[];
  savedRecipes: BasicRecipe[];
  isLoggedIn: boolean;
}

export interface CacheState {
  query: string;
  recipes: FullRecipe[];
}

export interface IAppState {
  userInfo: UserState;
  recipeCache: CacheState;
}

export const rootReducer = combineReducers<IAppState>({
  userInfo: UserReducer,
  recipeCache: CacheReducer
});

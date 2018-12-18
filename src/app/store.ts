import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';

import { IRating } from './types/IRating';
import { BasicRecipe } from './types/recipe-basic';

export class UserState {
  name?: string;
  ratings: IRating[];
  savedRecipes: BasicRecipe[];
  isLoggedIn: boolean;
}

export class IAppState {
  userInfo: UserState;
}

export const rootReducer = combineReducers<IAppState>({
  userInfo: appReducer
});

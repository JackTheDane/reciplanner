import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';

import { IRating } from './IRating';

export class UserState {
  name?: string;
  ratings: IRating[];
  isLoggedIn: boolean;
}

export class IAppState {
  userInfo: UserState;
}

export const rootReducer = combineReducers<IAppState>({
  userInfo: userReducer
});

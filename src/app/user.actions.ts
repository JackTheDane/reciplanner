import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { IRating } from './types/IRating';
import { BasicRecipe } from './types/BasicRecipe';

@Injectable({
  providedIn: 'root'
})

export class UserActions {

  constructor (
    private ngRedux: NgRedux<IAppState>, 
    // private crudService: CrudService
  ) {} 

  
  static ADD_RATING = 'ADD_RATING'; 

  static SET_LOGIN = 'SET_LOGIN';

  static ADD_SAVED_RECIPE = 'ADD_SAVED_RECIPE';
  static REMOVE_SAVED_RECIPE = 'REMOVE_SAVED_RECIPE';

  public addRating(newRating: IRating) {
    this.ngRedux.dispatch({
      type: UserActions.ADD_RATING,
      payload: newRating
    });
  }

  public setLoggedIn(status: boolean) {
    this.ngRedux.dispatch({
      type: UserActions.SET_LOGIN,
      payload: status
    });
  }

  public saveRecipe(recipe: BasicRecipe) {
    this.ngRedux.dispatch({
      type: UserActions.ADD_SAVED_RECIPE,
      payload: recipe
    });
  }

  public removeSavedRecipe(recipe_id: string) {
    this.ngRedux.dispatch({
      type: UserActions.REMOVE_SAVED_RECIPE,
      payload: recipe_id
    });
  }
}

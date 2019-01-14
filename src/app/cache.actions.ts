import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { FullRecipe } from './types/FullRecipe';

@Injectable({
  providedIn: 'root'
})

export class CacheActions {

  constructor (
    private ngRedux: NgRedux<IAppState>
  ) {} 

  static SET_CACHED_RECIPES = 'SET_CACHED_RECIPES';

  public setCachedRecipes(recipes: FullRecipe[], query: string = '', pageNumber = 1) {
    this.ngRedux.dispatch({
      type: CacheActions.SET_CACHED_RECIPES,
      payload: {
        recipes: recipes,
        query: query,
        pageNumber: pageNumber
      }
    });
  }
}

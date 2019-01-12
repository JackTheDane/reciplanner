import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { IRating } from './types/IRating';
import { BasicRecipe } from './types/recipe-basic';

@Injectable({
  providedIn: 'root'
})

export class AppActions {

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
      type: AppActions.ADD_RATING,
      payload: newRating
    });
  }

  public setLoggedIn(status: boolean) {
    this.ngRedux.dispatch({
      type: AppActions.SET_LOGIN,
      payload: status
    });
  }

  public saveRecipe(recipe: BasicRecipe) {
    this.ngRedux.dispatch({
      type: AppActions.ADD_SAVED_RECIPE,
      payload: recipe
    });
  }

  public removeSavedRecipe(recipe_id: string) {
    this.ngRedux.dispatch({
      type: AppActions.REMOVE_SAVED_RECIPE,
      payload: recipe_id
    });
  }

  // createSitter(sitter: Sitter):void {
  //   this.ngRedux.dispatch({
  //     type: SittersActions.CREATE_SITTER
  //   } as any)

  //   this.crudService.createSitter(sitter).subscribe(result => {
  //    // on success 
  //    this.ngRedux.dispatch({
  //      type: SittersActions.CREATE_SITTER_SUCCESS,
  //      payload: sitter
  //    })
  //   }, error => {
  //     // if web service call fails with an error.
  //     this.ngRedux.dispatch({
  //       type: SittersActions.CREATE_SITTER_FAILURE,
  //       payload: error
  //     });
  //   });
  // }

  // deleteSitter(id: string) : void {

    
  //   this.crudService.deleteSitter(id).subscribe(result => {
  //     console.log("1");
  //     this.ngRedux.dispatch({
  //       type: SittersActions.DELETE_SITTER,
  //       payload: id
  //     });
  //   }, error => {
  //     console.log("2");
  //     this.ngRedux.dispatch({
  //       type: SittersActions.FAILED_DELETE_SITTER,
  //       payload: 'Something bad happened :-)'
  //     })
  //   });

    
  // }

  // setType(isBaby: boolean): void {
    
  //   // dispatch a redux action.
  //   this.ngRedux.dispatch(
  //   {
  //     type: SittersActions.SET_IS_BABY,
  //     payload: isBaby
  //   } as any
    
  //   )
  // }
}

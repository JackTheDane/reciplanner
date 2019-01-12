import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { BasicRecipe } from './types/BasicRecipe';

@Injectable({
  providedIn: 'root'
})

export class CacheActions {

  constructor (
    private ngRedux: NgRedux<IAppState>, 
    // private crudService: CrudService
  ) {} 

  static SET_CACHED_RECIPES = 'SET_CACHED_RECIPES';

  public setCachedRecipes(recipes: BasicRecipe[]) {
    this.ngRedux.dispatch({
      type: CacheActions.SET_CACHED_RECIPES,
      payload: recipes
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

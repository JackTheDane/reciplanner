import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { IRating } from './IRating';

@Injectable({
  providedIn: 'root'
})

export class UserActions {

  constructor (
    private ngRedux: NgRedux<IAppState>, 
    // private crudService: CrudService
  ) {} 

  // static SET_IS_BABY = 'SET_IS_BABY'; 
  
  static ADD_RATING = 'ADD_RATING'; 
  // static CREATE_RATING_SUCCESS = 'CREATE_RATING_SUCCESS'; 
  // static CREATE_RATING_FAILURE = 'CREATE_RATING_FAILURE'; 

  // static FAILED_DELETE_SITTER = 'FAILED_DELETE_SITTER'; 
 
  public addRating(newRating: IRating) {
    this.ngRedux.dispatch({
      type: UserActions.ADD_RATING,
      payload: newRating
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

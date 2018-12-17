import { UserActions } from './user.actions';
import { IRating } from './types/IRating';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { TestBed } from '@angular/core/testing';

// describe('UserActions', () => {
//   let actions: UserActions;
//   let mockRedux: NgRedux<any>;

//   beforeEach(() => TestBed.configureTestingModule({}));

//   beforeEach( () => {
//     mockRedux = new NgRedux();
//     actions = new UserActions()
//   });

//   it('create an action for adding rating', () => {
//     const rating: IRating = {
//       id: '123456',
//       rating: 5
//     };
//     const expectedAction = {
//       type: 'ADD_RATING',
//       payload: rating
//     };

//     expect(UserActions.addRating)
//   });
// });

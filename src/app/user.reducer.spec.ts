const deepFreeze = require('deep-freeze');
import { userReducer } from './user.reducer';
import { UserActions } from './user.actions';
import { UserState, IAppState } from './store';

describe( 'app reducer', () => {

  const userTestState: UserState = {
    isLoggedIn: true,
    name: 'bob',
    ratings: [],
    savedRecipes: [
      {
        publisher: 'Closet Cooking',
        title: 'Jalapeno Popper Grilled Cheese Sandwich',
        source_url: 'http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html',
        recipe_id: '35382',
        image_url: 'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
        social_rank: 100,
        publisher_url: 'http://closetcooking.com'
      },
      {
        publisher: 'The Pioneer Woman',
        title: 'Perfect Iced Coffee',
        source_url: 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
        recipe_id: '47024',
        image_url: 'http://static.food2fork.com/icedcoffee5766.jpg',
        social_rank: 100,
        publisher_url: 'http://thepioneerwoman.com'
      }
    ]
  };

  const extraRecipe = {
    publisher: 'The Pioneer Woman',
    title: 'Crash Hot Potatoes',
    source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
    recipe_id: '47319',
    image_url: 'http://static.food2fork.com/CrashHotPotatoes5736.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com'
  };

  it('should allow saving of a recipe', () => {
    const state = userTestState;
    const expectedResult = {...userTestState};

    expectedResult.savedRecipes = expectedResult.savedRecipes.concat(extraRecipe);

    deepFreeze(state);

    expect( userReducer(state, {type: UserActions.ADD_SAVED_RECIPE, payload: extraRecipe}) ).toEqual(expectedResult);
  });

  // Remove recipe

  it('should allow for removing a recipe', () => {
    const state = userTestState;
    const expectedResult = {...userTestState};

    // Make array, where the last element was removed
    expectedResult.savedRecipes = [ expectedResult.savedRecipes[0] ];

    deepFreeze(state);

    expect( userReducer(state, {type: UserActions.REMOVE_SAVED_RECIPE, payload: '47024'}) ).toEqual(expectedResult);
  });

  // Log in
  it('should allow logging in', () => {
    const state = {...userTestState};
    state.isLoggedIn = false;

    const expectedResult = {...userTestState};

    deepFreeze(state);

    expect( userReducer(state, {type: UserActions.SET_LOGIN, payload: true}) ).toEqual(expectedResult);    
  });

  // Log out
  it('should allow logging out', () => {
    const state = userTestState;
    
    const expectedResult = {...userTestState};
    expectedResult.isLoggedIn = false;

    deepFreeze(state);

    expect( userReducer(state, {type: UserActions.SET_LOGIN, payload: false}) ).toEqual(expectedResult);    
  });

});


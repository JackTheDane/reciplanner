import { browser, $$ } from 'protractor';
import { AppPage } from './app.po';

describe('Reciplanner, save recipe test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1. Login
  it ('1. should login', () => {
    page.login();
  });

  // 2. Save a recipe
  it('2. should save a new recipes', () => {
    browser.waitForAngular();
    $$('.save-recipe-button').first().click();
  });

  // 3. Go to reciplans
  it('3. Go to my reciplans', () => {
    $$('.my-reciplans-button').first().click();
  });

  // 4. Delete saved recipe
  it('4. Remove saved recipe', () => {
    const numberOfCards = $$('mat-card').count();
    expect( numberOfCards ).toBe(1);
    $$('.remove-recipe-button').first().click();
    expect( $$('mat-card').count() ).toBe(0);
  });

});

import { browser, by, element, $$ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  login() {
    browser.get('/sign-in');
    $$('.username').sendKeys('bob');
    $$('.password').sendKeys('Pass123');
    $$('.login-button').click();
  }
}

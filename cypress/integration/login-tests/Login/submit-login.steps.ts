import { Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from './loginPage';
import { DashboardPage } from '../../../pages/dashboardPage';
import testData from '../../../fixtures/testData';

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();

And(/^I enter valid credentials$/, () => {
  loginPage.enterCredentials((<any>testData).email, (<any>testData).validPassword);
  loginPage.clickLoginButton();
});

Then(/^I can see my username displayed on the page$/, function () {
  dashboardPage.verify((<any>testData).loggedInUser);
});

Given(/^I enter invalid credentials$/, () => {
  loginPage.enterCredentials((<any>testData).email, (<any>testData).invalidPassword);
  loginPage.clickLoginButton();
});

Then(/^I see error message on the page$/, function () {
  dashboardPage.checkInvalidPasswordErrorMessage((<any>testData).invalidPasswordErrorMessage);
});

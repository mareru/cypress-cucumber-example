import { Then, Given, And} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "../../../pages/loginPage";
import DashboardPage from "../../../pages/dashboardPage";
import testData from "../../../fixtures/testData";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();

And(/^I enter valid credentials$/, () => {
    loginPage.enterCredentials(testData.email, testData.validPassword);
    loginPage.clickLoginButton();
});

Then(/^I can see my username displayed on the page$/, function () {
    dashboardPage.verify(testData.loggedInUser);
});

Given(/^I enter invalid credentials$/, () => {
    loginPage.enterCredentials(testData.email, testData.invalidPassword);
    loginPage.clickLoginButton();
});

Then(/^I see error message on the page$/, function () {
    dashboardPage.checkInvalidPasswordErrorMessage(testData.invalidPasswordErrorMessage);
});
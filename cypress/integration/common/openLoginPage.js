import HomePage from "../../pages/homePage";
import { Given, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/loginPage";
import testData from "../../fixtures/testData.json";

let homePage = new HomePage();
let loginPage = new LoginPage();

Given(/^I visit home page$/, function () {
    homePage.visit(testData.baseUrl);
});

When(/^I navigate to login page$/, function () {
    homePage.clickSignInButton();
    loginPage.verify();
});
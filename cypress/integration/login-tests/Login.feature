Feature: Login
  Test login process

  Background: Open login page
  Given I visit home page
  When I navigate to login page

  Scenario: Login with valid credentials
    And I enter valid credentials
    Then I can see my username displayed on the page

  Scenario: Login with invalid credentials
    Given I enter invalid credentials
    Then I see error message on the page
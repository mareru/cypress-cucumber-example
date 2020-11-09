export class LoginPage {

    get loginButton() {
        return '#SubmitLogin > span';
    }

    get emailField() {
        return '#email';
    }

    get passwordField() {
        return '#passwd';
    }

    verify() {
        cy.get(this.loginButton).should('exist');
    }

    enterCredentials(username: string, password: string) {
        cy.get(this.emailField).type(username);
        cy.get(this.passwordField).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }
}
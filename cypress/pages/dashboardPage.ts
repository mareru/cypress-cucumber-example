export class DashboardPage {
    get loggedInUser() {
        return '.account > span';
    }

    get errorMessage() {
        return '#center_column > :nth-child(2)';
    }

    verify(user: string) {
        cy.get(this.loggedInUser).should('contain.text', user);
    }

    checkInvalidPasswordErrorMessage(message: string) {
        cy.get(this.errorMessage).should('contain.text', message);
    }
}
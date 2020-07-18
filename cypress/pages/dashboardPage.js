class DashboardPage {
    get loggedInUser() {
        return '.account > span';
    }

    get errorMessage() {
        return '#center_column > :nth-child(2)';
    }

    verify(user) {
        cy.get(this.loggedInUser).should('contain.text', user);
    }

    checkInvalidPasswordErrorMessage(message) {
        cy.get(this.errorMessage).should('contain.text', message);
    }
}

export default DashboardPage;
class HomePage {
    get phoneNumber() {
        return '.shop-phone';
    }

    get signInButton() {
        return '.login';
    }

    visit(url) {
        cy.visit(url);
        cy.get(this.phoneNumber).should('be.visible').and('contain.text', '0123-456-789');
    }

    clickSignInButton() {
        cy.get(this.signInButton).click();
    }
}

export default HomePage;
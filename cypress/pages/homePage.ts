export class HomePage {
    get phoneNumber() {
        return '.shop-phone';
    }

    get signInButton() {
        return '.login';
    }

    visit(url: string, phoneNumber: string) {
        cy.visit(url);
        cy.get(this.phoneNumber).should('be.visible').and('contain.text', phoneNumber);
    }

    clickSignInButton() {
        cy.get(this.signInButton).click();
    }
}
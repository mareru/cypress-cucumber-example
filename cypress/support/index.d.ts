declare namespace Cypress {
    interface Chainable {
        say(value: string): Chainable<Element>
    }
}
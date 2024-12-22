/// <reference types="Cypress" />

import CheckoutTwoElements from "../elements/checkout_step_two";

const checkoutTwoElements = new CheckoutTwoElements

class CheckoutTwoPage {
    clicarBotaoFinish() {
        cy.get(checkoutTwoElements.botaoFinish()).click()
    }
    clicarBotaoCancel() {
        cy.get(checkoutTwoElements.botaoCancel()).click()
    }
}

export default CheckoutTwoPage;
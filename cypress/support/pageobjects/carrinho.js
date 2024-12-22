/// <reference types="Cypress" />

import CarrinhoElements from "../elements/carrinho";

const carrinhoElements = new CarrinhoElements

class CarrinhoPage {
    clicarBotaoCarrinho() {
        cy.get(carrinhoElements.botaoCarrinho()).click()
    }

    clicarBotaoContinueShopping() {
        cy.get(carrinhoElements.botaoContinueShopping()).click()
    }

    clicarBotaoCheckout() {
        cy.get(carrinhoElements.botaoCheckout()).click()
    }

    clicarBotaoRemove() {
        cy.get(carrinhoElements.botaoRemove()).click()
    }

    verificaRedirecionamentoCheckoutOne(){
        cy.url().should('include', '/checkout-step-one.html');
    }
}

export default CarrinhoPage;
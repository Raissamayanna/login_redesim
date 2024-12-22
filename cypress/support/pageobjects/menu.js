/// <reference types="Cypress" />

import MenuElements from "../elements/menu"
const menuElements = new MenuElements

class MenuPage {
    clicarMenuAllItens() {
        cy.get(menuElements.botaoMenu()).click()
        cy.get(menuElements.allItens()).click()
    }
  
    clicarMenuAbout() {
        cy.get(menuElements.botaoMenu()).click()
        cy.get(menuElements.about()).click()
    }

    clicarMenuLogout() {
        cy.get(menuElements.botaoMenu()).click()
        cy.get(menuElements.logout()).click()
    }

    clicarMenuResetAppState() {
        cy.get(menuElements.botaoMenu()).click()
        cy.get(menuElements.resetAppState()).click()
    }

    verificarRedirecionamentoSouceLabs() {
        cy.url().should('include', '/inventory.html');
    }
}

export default MenuPage;
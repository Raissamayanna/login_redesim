/// <reference types="Cypress" />

import CheckoutOneElements from "../elements/checkout_step_one";

const checkoutOneElements = new CheckoutOneElements

class CheckoutOnePage {
    clicarBotaoContinue() {
        cy.get(checkoutOneElements.botaoContinue()).click()
    }

    clicarBotaoCancel() {
        cy.get(checkoutOneElements.botaoCancel()).click()
    }

    digitarFirstName(name) {
        name = name == null ? 'Raissa' : name
        cy.get(checkoutOneElements.firstName()).type(name)
    }

    digitarLastName(lastName) {
        lastName = lastName == null ? 'Mayanna' : lastName
        cy.get(checkoutOneElements.lastName()).type(lastName)
    }

    digitarZipPostalCode(zipPostalCode) {
        zipPostalCode = zipPostalCode == null ? '58000-000' : zipPostalCode
        cy.get(checkoutOneElements.zipPostalCode()).type(zipPostalCode)
    }

    mensagemErro(mensagem) {
        cy.get(checkoutOneElements.mensagemErro()).should('contain', mensagem)
    }

    verificarRedirecionamentoCarrinho(){
        cy.url().should('include', '/cart.html')
    }

    verificarRedirecionamentoStepTwo(){
        cy.url().should('include', '/checkout-step-two.html')
    }

    preencherFormularioCheckout(name, lastName, zipPostalCode){
        this.digitarFirstName(name);
        this.digitarLastName(lastName);
        this.digitarZipPostalCode(zipPostalCode);
        this.clicarBotaoContinue();
    }

    verificar_e_digitar(campos) {
        // Mapeamento dos campos para os métodos correspondentes
        const metodos = {
            "First Name": this.digitarFirstName,
            "Last Name": this.digitarLastName,
            "Zip/Postal Code": this.digitarZipPostalCode
        };
    
        // Verifica a presença de cada campo na ordem desejada
        if (!campos.includes("First Name")) {
            metodos["First Name"](null); // Chama digitarFirstName se não estiver presente
        } 
        if (!campos.includes("Last Name")) {
            metodos["Last Name"](null); // Chama digitarLastName se não estiver presente
        } 
        if (!campos.includes("Zip/Postal Code")) {
            metodos["Zip/Postal Code"](null); // Chama digitarZipPostalCode se não estiver presente
        }
    }
}

export default CheckoutOnePage;
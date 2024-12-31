/// <reference types="Cypress" />

import LoginElements from '../elements/login'

const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
// Clica no botão que acessa a página de login do site
    clicarBotaoLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    digitarUsuario(user) {
        cy.get(loginElements.userName()).type(user)
    }

    digitarSenha(senha) {
        cy.get(loginElements.password()).type(senha)
    }

     mensagemErro(mensagem) {
        cy.get(loginElements.mensagemErro()).should('contain', mensagem)
    }
}

export default LoginPage;
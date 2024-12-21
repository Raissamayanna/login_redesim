/// <reference types="Cypress" />

import LoginElements from '../elements/login'
import ProductElements from '../elements/produtos'

const loginElements = new LoginElements
const productElements = new ProductElements
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
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    mensagemErro(mensagem) {
        cy.get(loginElements.mensagemErro()).should('contain', mensagem)
    }

    digitarUsuario(user) {
        cy.get(loginElements.userName()).type(user)
    }

    digitarSenha(senha) {
        cy.get(loginElements.password()).type(senha)
    }
    
    verificarRedirecionamento() {
        cy.get(productElements.labelProduct()).should('be.visible')
    }
    
}
    

export default LoginPage;
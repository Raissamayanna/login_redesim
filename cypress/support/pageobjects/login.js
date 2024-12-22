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


    logarSistema(user, senha) {
        this.acessarSite();
        this.digitarUsuario(user);
        this.digitarSenha(senha);
        this.clicarBotaoLogin();
    }

    verificarRedirecionamentoLogin() {
        cy.url().should('include', '/index.html');
    }
}

export default LoginPage;
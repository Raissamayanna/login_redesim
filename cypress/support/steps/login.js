/* global Given, Then, When */

import LoginPage from '../pageobjects/login'
const loginPage = new LoginPage

Given("que na estou na tela de autentaticação", () => {
    loginPage.acessarSite();
})

When("digito login e senha válidos", () => {
    loginPage.digitarUsuario("standard_user")
    loginPage.digitarSenha("secret_sauce")
})

When("clico no botão de login", () => {
    loginPage.clicarBotaoLogin()
})

Then("deve apresentar a mensagem de erro {string}", (mensagem) => {
    loginPage.mensagemErro(mensagem)
})

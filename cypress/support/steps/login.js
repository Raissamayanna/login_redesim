/* global Given, Then, When */

import LoginPage from '../pageobjects/login'
const loginPage = new LoginPage

Given("que estou na página de login", () => {
    loginPage.acessarSite();
})

When("clico no botão login", () => {
    loginPage.clicarBotaoLogin();
})

Then("deve aparecer a mensagem de erro {string}", (mensagem) => {
    loginPage.mensagemErro(mensagem);
})

When("digito o usuário {string}", (user) => {
    loginPage.digitarUsuario(user);
})

When("digito a senha {string}", (senha) => {
    loginPage.digitarSenha(senha);
})

Then("deve ser redirecionado para a página de produtos", () => {
    loginPage.verificarRedirecionamento();
})
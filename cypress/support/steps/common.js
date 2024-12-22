/* global Given, Then, When */
import LoginPage from '../pageobjects/login';
import ProdutosPage from '../pageobjects/produtos'
const produtosPage = new ProdutosPage
const loginPage = new LoginPage

Given("que estou logado no sistema", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
})

Then("devo ser redirecionado para a página de produtos", () => {
    produtosPage.verificarRedirecionamentoProdutos();
})

Then("devo ser redirecionado para a página de login", () => {
    loginPage.verificarRedirecionamentoLogin();
})
/* global Given, Then, When */

import CarrinhoPage from '../pageobjects/carrinho'
import CheckoutOnePage from '../pageobjects/checkout_step_one'
import LoginPage from '../pageobjects/login'
import ProdutosPage from '../pageobjects/produtos'
import MenuPage from '../pageobjects/menu'

const menuPage = new MenuPage
const carrinhoPage = new CarrinhoPage
const loginPage = new LoginPage
const produtoPage = new ProdutosPage
const checkoutOnePage = new CheckoutOnePage

Given("que estou na tela de checkout", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
    produtoPage.adcionarProdutoAoCarrinho()
    carrinhoPage.clicarBotaoCarrinho()
    carrinhoPage.clicarBotaoCheckout()
})

When("avanço sem preencher os campos {string}", (campo) => {
    checkoutOnePage.verificar_e_digitar(campo)
    checkoutOnePage.clicarBotaoContinue()
})

Then("deve aparecer nesta tela de checkout a mensagem de erro {string}", (mensagem) => {
    checkoutOnePage.mensagemErro(mensagem)
    menuPage.clicarMenuResetAppState()
})

When("clico no botão cancel", () => {
    checkoutOnePage.clicarBotaoCancel()
})

Then("devo ser redirecionado para a página do carrinho", () => {
    checkoutOnePage.verificarRedirecionamentoCarrinho()
    menuPage.clicarMenuResetAppState()
})

When("clico no botão continue", () => {
    checkoutOnePage.clicarBotaoContinue()
})

Then("devo ser redirecionado para a página de checkout-step-two", () => {
    checkoutOnePage.verificarRedirecionamentoStepTwo()
    menuPage.clicarMenuResetAppState()
})

When("preencho o campo {string} com {string}", (campo, valor) => {
    switch(campo) {
        case "First name":
            checkoutOnePage.digitarFirstName(valor)
            break;
        case "Last name":
            checkoutOnePage.digitarLastName(valor)
            break;
        case "ZIP/POSTAL CODE":
            checkoutOnePage.digitarZipPostalCode(valor)
            break;
      }
})
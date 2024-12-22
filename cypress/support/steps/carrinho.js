/* global Given, Then, When */

import CarrinhoPage from '../pageobjects/carrinho'
import LoginPage from '../pageobjects/login'
import MenuPage from '../pageobjects/menu'
import ProdutoPage from '../pageobjects/produtos'

const carrinhoPage = new CarrinhoPage
const loginPage = new LoginPage
const produtoPage = new ProdutoPage
const menuPage = new MenuPage

Given("que estou na página de carrinho", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
    produtoPage.adcionarProdutoAoCarrinho()
    carrinhoPage.clicarBotaoCarrinho()
})

When("clico no botão remove", () => {
    carrinhoPage.clicarBotaoRemove()
})

Then("o produto deve ser removido do carrinho", () => {
    
})

When("clico no botão continue shopping", () => {
    carrinhoPage.clicarBotaoContinueShopping()
    menuPage.clicarMenuResetAppState()
})

When("clico no botão checkout", () => {
    carrinhoPage.clicarBotaoCheckout()
})

Then("devo ser redirecionado para a página de checkout-step-one", () => {
    carrinhoPage.verificaRedirecionamentoCheckoutOne()
    menuPage.clicarMenuResetAppState()
})

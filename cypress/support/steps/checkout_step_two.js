/* global Given, Then, When */

import CarrinhoPage from '../pageobjects/carrinho'
import CheckoutOnePage from '../pageobjects/checkout_step_one'
import LoginPage from '../pageobjects/login'
import ProdutosPage from '../pageobjects/produtos'
import MenuPage from '../pageobjects/menu'
import CheckoutTwoPage from '../pageobjects/checkout_step_two'

const menuPage = new MenuPage
const carrinhoPage = new CarrinhoPage
const loginPage = new LoginPage
const produtoPage = new ProdutosPage
const checkoutOnePage = new CheckoutOnePage
const checkoutTwoPage = new CheckoutTwoPage

Given("que estou na página de checkout-step-two", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
    produtoPage.adcionarProdutoAoCarrinho()
    carrinhoPage.clicarBotaoCarrinho()
    carrinhoPage.clicarBotaoCheckout()
    checkoutOnePage.preencherFormularioCheckout("Raissa", "Silva", "12345")
})

When("clico no botão FINISH", () => {
    checkoutTwoPage.clicarBotaoFinish()
})

When("clico no botão CANCEL", () => {
    checkoutTwoPage.clicarBotaoCancel()
})

When("aparecer a mensagem {string}", (mensagem) => {
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
})
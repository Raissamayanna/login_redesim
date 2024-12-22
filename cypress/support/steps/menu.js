/* global Given, Then, When */

import MenuPage from '../pageobjects/menu'
const menuPage = new MenuPage

Given("clico no menu {string}", (opcao) => {
    switch(opcao) {
        case "All Items":
            menuPage.clicarMenuAllItens()
            break;
        case "About":
            // menuPage.clicarMenuAbout() // Erro cypress
            break;
        case "Logout":
            menuPage.clicarMenuLogout()
            break;
        case "Reset App State":
            menuPage.clicarMenuResetAppState()
            break;
      }
})

Then("devo ser redirecionado para a página do site Sause Labs", () => {
    menuPage.verificarRedirecionamentoSouceLabs();
})

Then("devo ser deslogado do sistema", () => {
})

Then("deve limpar o carrinho de compras", () => {
})
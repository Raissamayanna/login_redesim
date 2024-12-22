/* global Given, Then, When */
import ProdutosPage from '../pageobjects/produtos'
import LoginPage from '../pageobjects/login'
const produtosPage = new ProdutosPage
const loginPage = new LoginPage

Given("que estou na tela de produtos do inventory", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
})

When("seleciono o produto desejado", () => {
    produtosPage.selecionarProduto()
})

Then("deve carregar uma nova página e exibir as informações do produto selecionado", () => {
    produtosPage.verificarRedirecionamentoEspecifico()
})

When("eu adiciono o produto ao carrinho", () => {
    produtosPage.adcionarProdutoAoCarrinho()
})

Then("deve adcionar a quantidade do produto no carrinho", () => {
    produtosPage.removerProdutoDoCarrinho()
})

When("clico no botão de Remove", () => {
    produtosPage.adcionarProdutoAoCarrinho()
    produtosPage.removerProdutoDoCarrinho()
})

Then("deve remover o produto do carrinho", () => {
    
})

Then("deve subtrair a quantidade de produtos", () => {
    
})

When("eu ordeno os produtos por {string}", (ordem) => {
    produtosPage.ordenarProdutos(ordem)
})

Then("deve ordenar os produtos", () => {
    
})
import LoginPage from "../pageobjects/login";
import MenuPage from "../pageobjects/menu";
import ProdutosEspecificoPage from "../pageobjects/produto_especifico";
import ProdutosPage from "../pageobjects/produtos";

const produtoEspecificoPage = new ProdutosEspecificoPage
const produtoPage= new ProdutosPage
const loginPage = new LoginPage
const menuPage = new MenuPage

Given("que estou na página de um produto Especifico", () => {
    loginPage.logarSistema("standard_user", "secret_sauce")
    produtoPage.selecionarProduto();
})

When("clico no botão Add to cart", () => {
    produtoEspecificoPage.selecionarBotaoAddToCart()
})

Then("o produto é adicionado ao carrinho", () => {
    menuPage.clicarMenuResetAppState()
})

Given("o produto está no carrinho", () => {
    produtoEspecificoPage.selecionarBotaoAddToCart()
})

When("clico no botão Remove", () => {
    produtoEspecificoPage.selecionarBotaoRemove()
})

Then("o produto é removido do carrinho", () => {
})

When("clico no botão Back", () => {
    produtoEspecificoPage.selecionarBotaoBack()
})

Then("a página é redirecionada para a página anterior", () => {
    produtoEspecificoPage.verificarRedirecionamentoProdutos();
})
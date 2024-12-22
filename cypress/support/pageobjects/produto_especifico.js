/// <reference types="Cypress" />

import ProdutoEspecificoElements from '../elements/produto_especifico';
const produtoEspecificoElements = new ProdutoEspecificoElements

class ProdutosEspecificoPage {

    selecionarBotaoAddToCart() {
        cy.get(produtoEspecificoElements.botaoAddCart()).click();
    }

    selecionarBotaoRemove() {
        cy.get(produtoEspecificoElements.botaoRemove()).click();
    }

    selecionarBotaoBack() {
        cy.get(produtoEspecificoElements.botaoBack()).click();
    }

    verificarRedirecionamentoProdutos() {
        cy.url().should('include', '/inventory.html');
    }
}

export default ProdutosEspecificoPage;
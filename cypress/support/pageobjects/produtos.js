/// <reference types="Cypress" />

import ProdutoElements from '../elements/produtos'
const produtoElements = new ProdutoElements

class ProdutosPage {

    selecionarProduto() {
        cy.get(produtoElements.primeiroProduto()).click();
    }

    verificarRedirecionamentoEspecifico() {
        cy.url().should('include', '/inventory-item.html?id=')
    }

    adcionarProdutoAoCarrinho() {
        cy.get(produtoElements.botaoAddCartPrimeiroProduto()).click();
    }

    verificarProdutoAdicionado() {
        cy.get(produtoElements.botaoRemovePrimeiroProduto).should('be.visible')
    }

    removerProdutoDoCarrinho() {
        cy.get(produtoElements.botaoRemovePrimeiroProduto()).click();
    }

    ordenarProdutos(value){
        cy.get(produtoElements.ordenarListaProdutos()).select(value)
    }

    verificarRedirecionamentoProdutos() {
        cy.get(produtoElements.labelProduto()).should('be.visible')
    }

    

}

export default ProdutosPage;
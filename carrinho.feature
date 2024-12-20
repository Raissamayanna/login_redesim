Funcionalidade: Carrinho
    Selecionar Produtos escolhidos

Cenário: Remover Produto do Carrinho
    Dado que estou na página de carrinho
    Quando clico no botão "remove"
    Então o produto deve ser removido do carrinho

Cenário: Botão continue shopping
    Dado que estou na página de carrinho
    Quando clico no botão "continue shopping"
    Então devo ser redirecionado para a página de "produtos"

Cenário: Botão checkout
    Dado que estou na página de carrinho
    Quando clico no botão "checkout"
    Então devo ser redirecionado para a página de "checkout-step-one"
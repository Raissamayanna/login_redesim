Funcionalidade: Carrinho
    Selecionar Produtos escolhidos

Cenário: Remover Produto do Carrinho
    Dado que estou na página de carrinho
    Quando eu clico no botão de remover produto
    Então o produto deve ser removido do carrinho

Cenário: Botão continue shopping
    Dado que estou na página de carrinho
    Quando eu clico no botão continue shopping
    Então devo ser redirecionado para a página de produtos

Cenário: Botão checkout
    Dado que estou na página de carrinho
    Quando eu clico no botão checkout
    Então devo ser redirecionado para a página "checkout-step-one"
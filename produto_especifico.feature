Funcionalidade:  inventory-item
    informações do produto selecionado

Cenário: Adicionar produto ao carrinho
    Dado que estou na página de um produto Especifico
    Quando clico no botão "Add to cart"
    Então o produto é adicionado ao carrinho

Cenário: Remover produto do carrinho
    Dado que estou na página de um produto Especifico
    E o produto está no carrinho
    Quando clico no botão "Remove"
    Então o produto é removido do carrinho

Cenário: Botão de voltar a página 
    Dado que estou na página de um produto Especifico
    Quando clico no botão "Back"
    Então a página é redirecionada para a página anterior.
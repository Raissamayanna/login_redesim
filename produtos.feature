Funcionalidade: inventory
    Tela de produtos do inventory

Esquema do Cenário: Ordenação dos Produtos
    Dado que estou na tela de produtos do inventory
    Quando eu ordeno os produtos por <ordem>
    Então deve ordenar os produtos por <resultado>

    Exemplos:
    | ordem                 | resultado                      |
    | "Name (A to Z)"       | "Ordem alfabetica crescente"   |
    | "Name (Z to A)"       | "Ordem alfabetica decrescente" |
    | "Price (low to high)" | "Preço crescente"              |
    | "Price (high to low)" | "Preço decrescente"            |

Cenário: Selecionar Produto Especifico 
    Dado que estou na tela de produtos do inventory
    Quando seleciono o produto desejado
    Então deve carregar uma nova página e exibir as informações do produto selecionado

Cenário: Adcionar Produto ao Carrinho
    Dado que estou na tela de produtos do inventory
    Quando eu adiciono o produto ao carrinho
    Então deve adcionar a quantidade do produto no carrinho

Cenário: Remover produto do carrinho
    Dado que estou na tela de produtos do inventory
    Quando ciclo no botão de Remove 
    Então deve remover o produto do carrinho
    E deve subtrair a quantidade de produtos
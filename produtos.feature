Feature: inventory
    Tela de produtos do inventory

Scenario: Ordenação dos Produtos
    Given que estou na tela de produtos do inventory
    When eu ordeno os produtos por <ordem>
    Then deve ordenar os produtos por <resultado>

    Examples:
    | ordem                 | resultado                      |
    | "Name (A to Z)"       | "Ordem alfabetica crescente"   |
    | "Name (Z to A)"       | "Ordem alfabetica decrescente" |
    | "Price (low to high)" | "Preço crescente"              |
    | "Price (high to low)" | "Preço decrescente"            |

Scenario: Selecionar Produto Especifico 
    Given que estou na tela de produtos do inventory
    When seleciono o produto desejado
    Then deve carregar uma nova página e exibir as informações do produto selecionado

Scenario: Adcionar Produto ao Carrinho
    Given que estou na tela de produtos do inventory
    When eu adiciono o produto ao carrinho
    Then deve adcionar a quantidade do produto no carrinho

Scenario: Remover produto do carrinho
    Given que estou na tela de produtos do inventory
    When ciclo no botão de Remove 
    Then deve remover o produto do carrinho
    And deve subtrair a quantidade de produtos
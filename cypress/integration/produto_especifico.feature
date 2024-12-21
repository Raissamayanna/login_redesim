Feature:  inventory-item
    informações do produto selecionado

Scenario: Adicionar produto ao carrinho
    Given que estou na página de um produto Especifico
    When clico no botão Add to cart
    Then o produto é adicionado ao carrinho

Scenario: Remover produto do carrinho
    Given que estou na página de um produto Especifico
    And o produto está no carrinho
    When clico no botão Remove
    Then o produto é removido do carrinho

Scenario: Botão de voltar a página 
    Given que estou na página de um produto Especifico
    When clico no botão Back
    Then a página é redirecionada para a página anterior
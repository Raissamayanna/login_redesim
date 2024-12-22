Feature: Carrinho
    Selecionar Produtos escolhidos

Scenario: Remover Produto do Carrinho
    Given que estou na página de carrinho
    When clico no botão remove
    Then o produto deve ser removido do carrinho

Scenario: Botão continue shopping
    Given que estou na página de carrinho
    When clico no botão continue shopping
    Then devo ser redirecionado para a página de produtos

Scenario: Botão checkout
    Given que estou na página de carrinho
    When clico no botão checkout
    Then devo ser redirecionado para a página de checkout-step-one
Feature: Menu do site
    Opções do menu

Scenario: All Items
    Given que estou logado no sistema
    When clico no menu "All Items"
    Then devo ser redirecionado para a página de produtos

Scenario: About
    Given que estou logado no sistema
    When clico no menu "About"
    Then devo ser redirecionado para a página do site Sause Labs

Scenario: Logout
    Given que estou logado no sistema
    When clico no menu "Logout"
    Then devo ser deslogado do sistema
    And devo ser redirecionado para a página de login

Scenario: Reset App State
    Given que estou logado no sistema
    When clico no menu "Reset App State"
    Then deve limpar o carrinho de compras
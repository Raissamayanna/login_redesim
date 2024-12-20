Feature: checkout-step-one
    informações pessoais do usuário

Scenario: Acesso com nome, sobrenome e ZIP/POSTAL CODE
    Given que o usuário está na página de checkout
    When o usuário preencher o campo "first name" com "raissa"
    And o usuário preencher o campo "last name" com "silva"
    And o usuário preencher o campo "ZIP/POSTAL CODE" com "12345"
    And clico no botão Continue
    Then devo ser redirecionado para a página de "checkout-step-two"

Scenario: Botão Cancel
    Given que o usuário está na página de checkout
    When o usuário clicar em "cancel"
    Then devo ser redirecionado para a página de "carrinho de compras"

Scenario: Avançar sem preenchimento de campos
    Given que o usuário está na página de checkout
    When avanço sem preencher os campos <campo>
    Then deve aparecer a mensagem de erro "<mensagem>"

    Examples:
    | campo                                    | mensagem                          |
    | "First Name, Last Name, Zip/Postal Code" | "Error: First Name is required"   |
    | "First Name, Last Name"                  | "Error: First Name is required"   |
    | "First Name, Zip/Postal Code"            | "Error: First Name is required"   |
    | "Last Name, Zip/Postal Code"             | "Error: Last Name is required"    |
    | "First Name"                             | "Error: First Name is required"   |
    | "Last Name"                              | "Error: Last Name is required"    |
    | "Zip/Postal Code"                        | "Error: Postal Code is required"  |
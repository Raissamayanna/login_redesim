Feature: checkout-step-one
    informações pessoais do usuário

Scenario: Avançar preenchendo todos os campos
    Given que estou na tela de checkout
    When preencho o campo "First name" com "raissa"
    And preencho o campo "Last name" com "silva"
    And preencho o campo "ZIP/POSTAL CODE" com "12345"
    And clico no botão continue
    Then devo ser redirecionado para a página de checkout-step-two

Scenario: Botão Cancel
    Given que estou na tela de checkout
    When clico no botão cancel
    Then devo ser redirecionado para a página do carrinho

Scenario Outline: Avançar sem preenchimento de campos
    Given que estou na tela de checkout
    When avanço sem preencher os campos <campo>
    Then deve aparecer nesta tela de checkout a mensagem de erro <mensagem>
    Examples:
    | campo                                    | mensagem                          |
    | "First Name, Last Name, Zip/Postal Code" | "Error: First Name is required"   |
    | "First Name, Last Name"                  | "Error: First Name is required"   |
    | "First Name, Zip/Postal Code"            | "Error: First Name is required"   |
    | "Last Name, Zip/Postal Code"             | "Error: Last Name is required"    |
    | "First Name"                             | "Error: First Name is required"   |
    | "Last Name"                              | "Error: Last Name is required"    |
    | "Zip/Postal Code"                        | "Error: Postal Code is required"  |
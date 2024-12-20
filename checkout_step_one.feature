Funcionalidade: checkout-step-one
    informações pessoais do usuário

Cenário: Acesso com nome, sobrenome e ZIP/POSTAL CODE
    Dado que o usuário está na página de checkout
    Quando o usuário preencher o campo "first name" com "raissa"
    E o usuário preencher o campo "last name" com "silva"
    E o usuário preencher o campo "ZIP/POSTAL CODE" com "12345"
    E clico no botão "Continue"
    Então devo ser redirecionado para a página de "checkout-step-two"

Cenário: Botão Cancel
    Dado que o usuário está na página de checkout
    Quando o usuário clicar em "cancel"
    Então devo ser redirecionado para a página de "carrinho de compras"

Esquema do Cenário: Avançar sem preenchimento de campos
    Dado que o usuário está na página de checkout
    Quando avanço sem preencher os campos <campo>
    Então deve aparecer a mensagem de erro <mensagem>

    Exemplos:
    | campo                                    | mensagem                          |
    | "First Name, Last Name, Zip/Postal Code" | "Error: First Name is required"   |
    | "First Name, Last Name"                  | "Error: First Name is required"   |
    | "First Name, Zip/Postal Code"            | "Error: First Name is required"   |
    | "Last Name, Zip/Postal Code"             | "Error: Last Name is required"    |
    | "First Name"                             | "Error: First Name is required"   |
    | "Last Name"                              | "Error: Last Name is required"    |
    | "Zip/Postal Code"                        | "Error: Postal Code is required"  |
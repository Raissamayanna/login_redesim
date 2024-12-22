Feature: checkout-step-two
    Finalização do pedido
    
Scenario: Finalizar pedido
    Given que estou na página de checkout-step-two
    When clico no botão FINISH
    Then aparecer a mensagem "THANK YOU FOR YOUR ORDER"

Scenario: Botão Cancel
    Given que estou na página de checkout-step-two
    When clico no botão CANCEL
    Then devo ser redirecionado para a página de produtos
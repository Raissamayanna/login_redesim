Funcionalidade: checkout-step-two
    Finalização do pedido
    
Cenário: Finalizar pedido
    Dado que estou na página de checkout
    Quando eu clicar no botão "FINISH"
    Então deve concluir a compra 
    E aparecer a mensagem "THANK YOU FOR YOUR ORDER"

Cenário: Botão Cancel
    Dado que estou na página de checkout
    Quando eu clicar no botão "CANCEL"
    Então deve redirecionar para a página de produtos
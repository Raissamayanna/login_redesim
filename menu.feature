Funcionalidade: Menu do site
    Opções do menu

Cenário:  All Items
    Dado que estou logado no sistema
    Quando clico no All Items
    Então devo ser redirecionado para a página de produtos

Cenário: About
    Dado que estou logado no sistema
    Quando clico no About
    Então devo ser redirecionado para a página do site Sause Labs

Cenário:  logout
    Dado que estou logado no sistema
    Quando clico no logout
    Então devo ser deslogado do sistema 
    E devo ser redirecionado para a página de login

Cenário:  Reset App State
    Dado que estou logado no sistema
    Quando clico no Reset App State
    Então deve limpar o carrinho de compras
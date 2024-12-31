Feature: Autenticação

    Scenario: Usuário com login e senha válidos
        Given que na estou na tela de autentaticação
        When digito login e senha válidos 
        And clico no botão de login
        Then deve apresentar a mensagem de erro "Combinação inválida de usuário e senha."

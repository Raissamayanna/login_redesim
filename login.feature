Feature: Autenticação
  Como usuário do site Swag Labs
  Desejo fazer login, e acessar a página de produtos

Scenario: Acesso sem usuário e senha
  Given que estou na página de login
  When clico no botão login
  Then deve aparecer a mensagem de erro "Epic sadface: Username is required"

Scenario: Acesso com usuário válido e sem senha 
  Given que estou na página de login
  When Digito o usuário "standard_user"
  And clico no botão login
  Then deve aparecer a mensagem de erro "Epic sadface: Password is required"

Scenario: Acesso com senha sem usuário
  Given que estou na página de login
  When Digito a senha "secret_sauce"
  And clico no botão login
  Then deve aparecer a mensagem de erro "Epic sadface: Username is required"

Scenario: Acesso com usuário e com senha válidos 
  Given que estou na página de login
  When digito o usuário "standard_user"
  And digito a senha "secret_sauce"
  And clico no botão login
  Then deve ser redirecionado para a página de "produtos"

Scenario: Acesso com usuário e com senha inválidos
  Given que estou na página de login
  When digito o usuário "raissa"
  And digito senha "123"
  And clico no botão login
  Then deve aparecer a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
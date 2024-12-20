Funcionalidade: Autenticação
  Como usuário do site Swag Labs
  Desejo fazer login, e acessar a página de produtos

Cenário: Acesso sem usuário e senha
  Dado que estou na página de login
  Quando clico no botão "login"
  Então deve aparecer a mensagem de erro "Epic sadface: Username is required"

Cenário: Acesso com usuário válido e sem senha 
  Dado que estou na página de login
  Quando Digito o usuário "standard_user"
  E clico no botão "login"
  Então deve aparecer a mensagem de erro "Epic sadface: Password is required"

Cenário: Acesso com senha sem usuário
  Dado que estou na página de login
  Quando Digito a senha "secret_sauce"
  E clico no botão "Login"
  Então deve aparecer a mensagem de erro "Epic sadface: Username is required"

Cenário: Acesso com usuário e com senha válidos 
  Dado que estou na página de login
  Quando digito o usuário "standard_user"
  E digito a senha "secret_sauce"
  E clico no botão "login"
  Então deve ser redirecionado para a página de "produtos"

Cenário: Acesso com usuário e com senha inválidos
  Dado que estou na página de login
  Quando digito o usuário "raissa"
  E digito senha "123"
  E clico no botão "login"
  Então deve aparecer a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
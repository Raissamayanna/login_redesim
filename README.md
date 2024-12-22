# Projeto de Testes com Cypress e Cucumber

Este projeto contém testes automatizados, do site https://www.saucedemo.com/v1/, utilizando **Cypress** em conjunto com **Cucumber** para garantir o bom funcionamento da aplicação. O Cucumber oferece uma abordagem de testes de aceitação baseada em Gherkin, permitindo escrever testes em uma linguagem mais próxima do negócio.

## Pré-requisitos

Antes de começar, você precisará ter os seguintes programas instalados no seu computador:

1. **Node.js** (versão recomendada: 14 ou superior):
   - Para instalar o Node.js, acesse: https://nodejs.org/

2. **NPM** (gerenciador de pacotes do Node.js):
   - O NPM é instalado automaticamente junto com o Node.js.

3. **Cypress**:
   - O Cypress é o framework de testes end-to-end que será utilizado para automação dos testes.
   - A instalação será feita automaticamente ao instalar as dependências do projeto.

4. **Cucumber** (com o plugin para Cypress):
   - O Cucumber é uma ferramenta que permite escrever testes em uma linguagem amigável ao negócio.
   - O plugin será instalado via NPM junto com as dependências do projeto.

## Instalação

### 1. Clone o repositório

Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/usuario/projeto-cypress-cucumber.git
```

###  2. Navegue até o diretório do projeto
```bash
cd projeto-cypress-cucumber
```
### 3. Instale as dependências
```bash
npm install
```
### 4. Estrutura do Projeto
```bash
/desafio-vox
    /cypress
        /fixtures
        /integration
            .feature
        /plugins
            index.js
        /support
            /elements
            /pageobjects
            /steps
            commands.js
            index.js
    /node_modules
    .gitignore
    Bugs.txt
    cypress.config.js
    cypress.json
    package.json
    README.md
```
* /integration: Contém os arquivos .feature escritos com a linguagem Gherkin.
* /steps: Contém os arquivos JavaScript com a implementação dos steps do Cucumber.
* cypress.json: Arquivo de configuração do Cypress.

### 5. Como Executar os Testes
```bash
npx cypress open
```
Isso abrirá a interface gráfica do Cypress, onde você pode ver os testes e executá-los.

Alternativamente, você pode executar os testes em modo headless (sem interface gráfica) com o seguinte comando:

```bash
npx cypress run
```


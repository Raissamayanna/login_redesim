# Projeto de Testes com Cypress e Cucumber

## Pré-requisitos

Antes de começar, você precisará ter os seguintes programas instalados no seu computador:

1. **Node.js** (versão recomendada: 14 ou superior):
   - Para instalar o Node.js, acesse: https://nodejs.org/

2. **NPM** (gerenciador de pacotes do Node.js):
   - O NPM é instalado automaticamente junto com o Node.js.

## Instalação

### 1. Clone o repositório

###  2. Navegue até o diretório do projeto

### 3. Instale as dependências
```bash
npm install
```
### 4. Estrutura do Projeto
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
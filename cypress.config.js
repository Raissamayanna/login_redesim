const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature', // Localização dos arquivos .feature
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // Adicionando o pré-processador do Cucumber
      require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);

      // Configuração do pre-processamento de arquivos .feature
      on('file:preprocessor', require('@badeball/cypress-cucumber-preprocessor').default);

      return config;
    },
  },
});

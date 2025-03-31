const { defineConfig } = require("Cypress");
const {addCucumberPreprocessorPlugin}=require ("@badeball/cypress-cucumber-preprocessor");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin= require ("@badeball/cypress-cucumber-preprocessor/esbuild");
// const {default:createEsbuildPlugin}=require("@badeball/cypress-cucumber-preprocessor");


module.exports = defineConfig({
  e2e: {
    specPattern:"cypress/e2e/features/*.feature",
    viewportWidth: 1440,
    baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin (on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;
      on ("file:preprocessor", createBundler(
        {
      
          plugins: [preprocessor(config)],
        }
      ));
return config;

    },
  },
});

const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin}=require ("@badeball/cypress-cucumber-preprocessor");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin= require ("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require ("allure-cypress/reporter");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    specPattern:"cypress/e2e/features/*.feature",
    viewportWidth: 1440,
    baseUrl: process.env.CYPRESS_BASE_URL,
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      const allurePlugin = allureCypress(on, config);
      on("after:run", (results) => {
        allurePlugin.onAfterRun(results);
      });
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

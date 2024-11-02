import { defineConfig } from "cypress";
import { report } from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  projectId: 'Cypress Automation Test',
  numTestsKeptInMemory: 20,
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      report(on);
    },
    env: {
      webWidth: 1280,
      webHeight: 720,
      mobileWidth: 375,
      mobileHeight: 667,
      desktopWidth: 1440,
      desktopHeight: 900,
      baseUrl: 'https://automationexercise.com/', // Base URl for the tests
      hideCredentials: true,
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: true,
      json: true
    },
    specPattern: 'cypress/integration/tests/*.{js,jsx,ts,tsx}'
  }
});
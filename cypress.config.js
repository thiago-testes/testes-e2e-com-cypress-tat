const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    requestTimeout: 12000,
    setupNodeEvents(on, config) {
      // TODO implement node event listeners here
    },
  },
})

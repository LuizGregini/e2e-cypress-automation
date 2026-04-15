const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    theme: 'dark'
  },
  e2e: {
    baseUrl: "https://barrigarest.wcaquino.me",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // defaultCommandTimeout: 2000,
  },
})

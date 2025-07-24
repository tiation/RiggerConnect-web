// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Add global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // for uncaught exceptions related to hydration or React 19 issues
  if (err.message.includes('Hydration failed')) {
    return false
  }
  if (err.message.includes('There was an error while hydrating')) {
    return false
  }
  // Let other errors fail the test
  return true
})

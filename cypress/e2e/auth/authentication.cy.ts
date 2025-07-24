describe('Authentication Flow', () => {
  beforeEach(() => {
    // Reset authentication state before each test
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  describe('Login Page', () => {
    it('should display the login form', () => {
      cy.visit('/auth/login')
      
      cy.get('h2').should('contain', 'Sign in to your account')
      cy.get('input[type="email"]').should('be.visible')
      cy.get('input[type="password"]').should('be.visible')
      cy.get('button[type="submit"]').should('contain', 'Sign in')
    })

    it('should show validation errors for empty fields', () => {
      cy.visit('/auth/login')
      
      cy.get('button[type="submit"]').click()
      
      cy.get('[role="alert"], .text-red-700').should('contain', 'Please enter both email and password')
    })

    it('should contain ChaseWhiteRabbit NGO branding', () => {
      cy.visit('/auth/login')
      
      cy.get('h1').should('contain', 'RiggerConnect')
      cy.get('span').should('contain', 'ChaseWhiteRabbit NGO')
    })
  })

  describe('Register Page', () => {
    it('should display the registration form', () => {
      cy.visit('/register')
      
      cy.get('h1').should('contain', 'Register as a Worker')
      cy.get('button[type="submit"]').should('contain', 'Create Worker Profile')
    })
  })

  describe('Protected Routes', () => {
    it('should redirect unauthenticated users to login', () => {
      cy.visit('/dashboard')
      
      cy.url().should('include', '/auth/login')
      cy.url().should('include', 'redirectTo=%2Fdashboard')
    })
  })
})

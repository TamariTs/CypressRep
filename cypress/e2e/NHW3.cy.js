
describe('template spec', () => {
  before(() => {
  
    cy.fixture("IncorrectLogin.json").as("Incorrect")
  })
  it('passes', function () {
    cy.visit('http://automationexercise.com')
    cy.Login2(this.Incorrect.email, this.Incorrect.password)
    cy.get('.login-form > h2').should("be.visible")
    cy.get('.login-form > h2').should("have.text", 'Login to your account')
    cy.get('.login-form > form > p').should("have.text", 'Your email or password is incorrect!')
  })
})
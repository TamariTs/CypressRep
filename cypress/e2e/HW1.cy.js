describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("have.text", 'New User Signup!')
    //ან
    cy.contains('New User Signup!').should("be.visible")
    cy.get('[data-qa="signup-name"]').type("Tamari1")
    cy.get('[data-qa="signup-email"]').type("tamari1@gmail.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should("have.text", 'Enter Account Information')
    cy.get('#id_gender1').click()
    
    })
  })

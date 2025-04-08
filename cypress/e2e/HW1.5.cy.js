describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
   
    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should("have.text", 'New User Signup!')
    // 6. Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type("Tamari1")
    cy.get('[data-qa="signup-email"]').type("takotsikara@gmail.com")
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //8. Verify error 'Email Address already exist!' is visible
    cy.get('.signup-form > form > p').should("have.text", 'Email Address already exist!')

  })
})
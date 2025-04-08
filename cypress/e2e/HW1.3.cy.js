describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    // 5. Verify 'Login to your account' is visible
    //cy.get('.login-form > h2').should("be.visible")
    cy.get('.login-form > h2').should("have.text", 'Login to your account')
    // 6. Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type("takotsikara@gmail.com")
    cy.get('[data-qa="login-password"]').type("Wikara113")
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.get('.login-form > form > p').should("have.text", 'Your email or password is incorrect!')
  })
})
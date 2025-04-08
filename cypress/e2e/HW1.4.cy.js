describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("have.text", 'Login to your account')
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type("takotsikara@gmail.com")
cy.get('[data-qa="login-password"]').type("Wikara112")
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should("be.visible")
// 9. Click 'Logout' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 10. Verify that user is navigated to login page
cy.get('body').should("be.visible")

  })
})
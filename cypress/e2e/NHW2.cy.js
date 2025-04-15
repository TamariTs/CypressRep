
describe('template spec', () => {
  before(() => {
    cy.fixture("newfile.json").as("Userdata")
  })

  it('passes', function () {
    cy.visit('https://automationexercise.com/')

    cy.Login2(this.Userdata.email, this.Userdata.password)
    cy.get(':nth-child(10) > a').should("be.visible")
    // // 9. Click 'Delete Account' button
    // // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    // // // 10. Verify that 'ACCOUNT DELETED!' is visible
    // // cy.get('b').should("be.visible")
  })
})
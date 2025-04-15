
  describe('template spec', () => {
    before(()=>{
      cy.fixture("registerdetails.json").as("Userdata")})
  
    it('passes', function () {
      cy.visit('https://automationexercise.com/')
      cy.registration(this.Userdata)
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
      cy.get('b').should("be.visible")
      cy.get('[data-qa="continue-button"]').click()
      
      })
    })
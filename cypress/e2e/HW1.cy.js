describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("have.text", 'New User Signup!')
    //ან
    cy.contains('New User Signup!').should("be.visible")
    cy.get('[data-qa="signup-name"]').type("Tamari1")
    const randomNumber= Math.round(Math.random()*10000)
    cy.get('[data-qa="signup-email"]').type('tamari+'+randomNumber+'@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should("have.text",'Enter Account Information')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type("Wikara112")
    cy.get('[data-qa="days"]').select(3)
    cy.get('[data-qa="months"]').select("March")
    cy.get('[data-qa="years"]').select("1991")
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type("Tamari")
    cy.get('[data-qa="last_name"]').type("Tsikarishvili")
    cy.get('[data-qa="company"]').type("Epam")
    cy.get('[data-qa="address"]').type("Tsereteli ave 49")
    cy.get('[data-qa="address2"]').type("Vienna")
    cy.get('[data-qa="country"]').select("United States")
    cy.get('[data-qa="state"]').type("New York")
    cy.get('[data-qa="city"]').type("New York")
    cy.get('[data-qa="zipcode"]').type("07008")
    cy.get('[data-qa="mobile_number"]').type("+17799113399")
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should("have.text", 'Account Created!' )
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should("be.visible")
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
    
    })
  })

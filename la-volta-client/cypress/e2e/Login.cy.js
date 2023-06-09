describe ('Visit La Volta by FemCoders', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    
    it('A registered user can log in into La Volta', function () {
    let email = 'amelie_letron@yahoo.fr'
    let password = 'holiholi'

    cy.visit('http://localhost:3000/login')

    cy.get('.navbar-brand')
    cy.wait(2000)
    cy.get('input[name=email]').click({ force: true }).type(email)
    cy.wait(2000)
    cy.get('input[name=password]').click({ force: true }).type(`${password}{enter}`)
    cy.wait(2000)
    cy.get('.swal2-modal').contains("La sessió s'ha iniciat correctament")
    cy.wait(1000)
    cy.get('.swal2-modal').click()
    cy.wait(1000)
    cy.url().should('include', 'http://localhost:3000/affiliate/profile')
    cy.wait(3000)
    cy.getAllLocalStorage().should('exist')

    })

})
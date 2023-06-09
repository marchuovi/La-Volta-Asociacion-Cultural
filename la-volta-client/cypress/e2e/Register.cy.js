describe ('Register La Volta', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
      it('A user can register into La Volta', function () {
        let name = 'Illari'
        let lastname = 'Giudici'
        let email = 'il.g@gmail.com'
        let password = '09876543'
        cy.visit('http://localhost:3000/register')
        cy.get('input[name=name]').click({ force: true }).type(name)
        cy.wait(1000)
        cy.get('input[name=lastname]').click({ force: true }).type(lastname)
        cy.wait(1000)
        cy.get('input[name=email]').click({ force: true }).type(email)
        cy.wait(1000)
        cy.get('input[name=password]').click({ force: true }).type(`${password}{enter}`)
        cy.wait(2000)
        cy.getAllLocalStorage().should('exist')
        cy.wait(10000)
        cy.get('.swal2-modal').contains("S'ha registrat correctament")
        cy.wait(2000)
        cy.get('.swal2-modal').click()
        cy.wait(1000)
        cy.url().should('include', 'http://localhost:3000/affiliate/profile')
        })
    })
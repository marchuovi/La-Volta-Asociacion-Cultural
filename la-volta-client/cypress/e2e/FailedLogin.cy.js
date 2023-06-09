describe ('Fail login', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('failed to login', function () {
    let email = 'prueba@gmail.com'
    let password = '01234567'
    cy.visit('http://localhost:3000/login')
    cy.get('.navbar-brand')
    cy.wait(1000)
    cy.get('input[name=email]').click({ force: true }).type(email)
    cy.wait(1000)
    cy.get("input[name=password]").click({ force: true }).type(`${password}{enter}`);
    cy.wait(4000);
    cy.get('.swal2-modal').contains("error")
    cy.wait(1000)
    cy.url().should('include', 'http://localhost:3000/login')
  })
})
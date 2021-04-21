describe('Locators', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Deve achar alguns elementos', () => {
    cy.get('table#tabelaUsuarios td:contains("Doutorado"):eq(0) ~ td:eq(3) > input')
    cy.get('table#tabelaUsuarios tr:contains("Doutorado"):eq(0) td:eq(6) > input')
  })
})

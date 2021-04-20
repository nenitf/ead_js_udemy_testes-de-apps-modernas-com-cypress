describe('Cypress basics', () => {
  it('should visit a page and assert title', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      // .should('contain', 'Treinamento')
      .and('contain', 'Treinamento')
  })
})

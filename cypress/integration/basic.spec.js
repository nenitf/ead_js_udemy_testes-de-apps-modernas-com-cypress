describe('Cypress basics', () => {
  it('should visit a page and assert title', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    // cy.pause()

    cy.title()
      .should('be.equal', 'Campo de Treinamento')//.debug()
      // .should('contain', 'Treinamento')
      .and('contain', 'Treinamento')
  })

  it('should find and interact with element', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})

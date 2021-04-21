describe('Cypress basics', () => {
  it.only('should visit a page and assert title', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    // cy.pause()

    cy.title()
      .should('be.equal', 'Campo de Treinamento')//.debug()
      // .should('contain', 'Treinamento')
      .and('contain', 'Treinamento')

    cy.title().should(title => {
      console.log(title)
    })
  })

  it('should find and interact with element', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})

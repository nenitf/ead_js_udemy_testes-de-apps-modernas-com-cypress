describe('Cypress basics', () => {
  it.only('should visit a page and assert title', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    // cy.pause()

    cy.title()
      .should('be.equal', 'Campo de Treinamento')//.debug()
      // .should('contain', 'Treinamento')
      .and('contain', 'Treinamento')

    let syncTitle

    // cy.title().should(title => { // loop infinito em caso de cy.get dentro
    cy.title().then(title => {
      console.log(title)

      cy.get('#formNome').type(title)

      syncTitle = title
    })

    cy.get('[data-cy=dataSobrenome]').then(el => {
      el.val(syncTitle) // jquery
    })

    cy.get('#elementosForm\\:sugestoes').then(el => {
      cy.wrap(el).type(syncTitle)
    })
  })

  it('should find and interact with element', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})

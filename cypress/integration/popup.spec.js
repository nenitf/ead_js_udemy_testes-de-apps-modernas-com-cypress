describe('Work with popup', () => {
  it('deve preencher campo de texto 2', () => {
    cy.visit('http://wcaquino.me/cypress/frame.html')
    cy.get('#tfield')
      .type('funciona?')
      .should('have.value', 'funciona?')

    cy.on('window:alert', msg => {
      expect(msg).eq('Click OK!')
    })

    cy.get('#otherButton').click()
  })

  it('deve verificar se o popup foi invocado', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.window().then(win => {
      cy.stub(win, 'open').as('winOpen')
    })

    cy.get('#buttonPopUp').click()
    cy.get('@winOpen').should('be.called')
  })

  describe.only('with links', () => {
    beforeEach(() => {
      cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    it('check popup url', () => {
      cy.contains('Popup2')
        .should('have.prop', 'href') // retorna href
        .and('equal', 'http://wcaquino.me/cypress/frame.html')
    })
    it('should access popup dinamically', () => {
      cy.contains('Popup2').then(a => {
        const href = a.prop('href')
        cy.visit(href)
        cy.get('#tfield').type('funciona')
      })
    })

    it('should force link on same page', () => {
      cy.contains('Popup2')
        .invoke('removeAttr', 'target')
        .click()
      cy.get('#tfield').type('funciona')
    })
  })
})

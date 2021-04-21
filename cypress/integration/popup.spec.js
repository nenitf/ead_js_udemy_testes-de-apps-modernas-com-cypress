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
})

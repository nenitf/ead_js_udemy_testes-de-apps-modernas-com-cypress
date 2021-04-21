describe('Work with iframe', () => {
  it('deve preencher campo de texto', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
    cy.get('#frame1').then(iframe => {
      const body = iframe.contents().find('body')
      cy.wrap(body).find('#tfield')
        .type('funciona?')
        .should('have.value', 'funciona?')

      cy.on('window:alert', msg => {
        expect(msg).eq('Alert Simples')
      })

      // cy.wrap(body).find('#otherButton').click() // alert do iframe foge do escopo do cypress
    })
  })

  it('deve testar iframe diretamente', () => {
    cy.visit('http://wcaquino.me/cypress/frame.html')
    cy.get('#tfield')
      .type('funciona?')
      .should('have.value', 'funciona?')

    cy.on('window:alert', msg => {
      expect(msg).eq('Click OK!')
    })

    cy.get('#otherButton').click()
  })
})

describe('Time', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  it('going back to the past', () => {
    // cy.get('#buttonNow').click()
    // cy.get('#resultado > span').should('contain', '21/04/2021')

    // cy.clock()
    // cy.get('#buttonNow').click()
    // cy.get('#resultado > span').should('contain', '31/12/1969')

    const dt = new Date(2012, 3, 10, 15, 23, 50)
    cy.clock(dt.getTime()) // só pode ser usado uma vez por teste
    cy.get('#buttonNow').click()
    cy.get('#resultado > span').should('contain', '10/04/2012')
  })

  it.only('goes to the future', () => {
    cy.get('#buttonTimePassed').click()
    cy.get('#resultado > span').should('contain', '1619')
    // cy.get('#resultado > span').invoke('text').should('gt', 15731)
    cy.get('#resultado > span').invoke('text').then(n => {
      expect(parseInt(n)).gt(15731)
    })
  })
})

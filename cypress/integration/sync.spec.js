describe('Espera...', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Deve aguardar elemento estar idsponível', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('funciona')
  })

  it('Deve fazer retries', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo')
      //.should('not.exist')  // retorna null pois não existe
      .should('exist')      // erro
  })

  it('Uso do find', () => {
    cy.get('#buttonList').click()
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1')

    // retries ocorrem com assertivas e não com comandos (find)
    // portanto caso tenha delay o find não será rodado novamente
    // e a assertiva fica presa ao escopo anterior
    //
    // no exemplo:
    //
    // - Item 2 demorou para aparecer
    // - Falhou na assertiva
    // - O comando cy.get('#lista li') foi refeito (ignora find)
    // - Escopo da segunda li foi perdido
    //
    // cy.get('#lista li')
      // .find('span')
      // .should('contain', 'Item 2')

    cy.get('#lista li span')
      .should('contain', 'Item 1')
  })

  it('Uso do timeout', () => {
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo', { timeout: 100 }).should('exist')
    // cy.get('#novoCampo').should('exist') // caso queira restringir/aumentar globalmente o tempo configure /cypress.json com "defaultCommandTimeout": 100
    // evitar cy.wait(500) pois não envolve retries, é um tempo fixo
  })

  it.only('Uso do timeout 2', () => {
    cy.get('#buttonListDOM').click()

    // 1 timeout para todos shoulds
    // cy.get('#lista li span')
    //   .should('have.length', 1)
    //   .should('have.length', 2) // delay

    // 2 timeout para todos shoulds
    cy.get('#lista li span')
      .should('have.length', 1)
    cy.get('#lista li span')
      .should('have.length', 2) // delay
  })
})

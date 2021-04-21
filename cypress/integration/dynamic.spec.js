describe('Dynamic tests', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  const foods = ['carne', 'frango', 'pizza', 'vegetariano']

  foods.forEach(food => {
    it(`Deve selecionar ${food}`, () => {
      cy.get('#formNome').type('Usuario qualquer')
      cy.get('#formSobrenome').type('Sobrenome qualquer')
      cy.get('[name=formSexo][value=F]').click()
      cy.get(`[name=formComidaFavorita][value=${food}]`).click()
      cy.get('#formEscolaridade').select('Doutorado')
      cy.get('#formEsportes').select('Corrida')

      cy.get('#formCadastrar').click()
      cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
  })

  it.only('deve selecionar todos usando each', () => {
    cy.get('#formNome').type('Usuario qualquer')
    cy.get('#formSobrenome').type('Sobrenome qualquer')
    cy.get('[name=formSexo][value=F]').click()

    // todos incluindo veg
    // cy.get(`[name=formComidaFavorita]`).click({multiple: true})
    // cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')

    // filtra veg
    cy.get(`[name=formComidaFavorita]`).each((el) => {
      if(el.val() !== 'vegetariano') {
        // el.click() // jquery.click perde a rastreabilidade (painel esquerdo) do cypress
        cy.wrap(el).click()
      }
    })

    cy.get('#formEscolaridade').select('Doutorado')
    cy.get('#formEsportes').select('Corrida')
  })
})

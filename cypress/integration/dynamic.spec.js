describe('Dynamic tests', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  const foods = ['carne', 'frango', 'pizza', 'vegetariano']

  foods.forEach(food => {
    it.only(`Deve selecionar ${food}`, () => {
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
})

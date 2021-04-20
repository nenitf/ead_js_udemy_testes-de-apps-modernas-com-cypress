describe('Work with basic elements', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Text', () => {
    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Links', () => {
    cy.get('a[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('have.not.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

  it.only('Textfields', () => {
    cy.get('#formNome').type('Cypress testt')
    cy.get('#formNome').should('have.value', 'Cypress testt')

    cy.get('#elementosForm\\:sugestoes')
      .type('text areaa')
      .should('have.value', 'text areaa')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('????')

    cy.get('[data-cy="dataSobrenome"]')
      .type('Teste12345{backspace}{backspace}')
      .should('have.value', 'Teste123')

    cy.get('#elementosForm\\:sugestoes')
      .clear()
      .type('erro{selectall}acerto', {delay: 100})
      .should('have.value', 'acerto')
  })
})

describe('Work with basic elements', () => {
  before(() => {
    // cy.visit('http://wcaquino.me/cypress/componentes.html')
    cy.visit('localhost:2222')
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

  it('Textfields', () => {
    cy.get('#formNome').type('Cypress testt')
    cy.get('#formNome').should('have.value', 'Cypress testt')

    cy.get('#elementosForm\\:sugestoes')
      .type('text areaa')
      .should('have.value', 'text areaa')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('????')

    cy.get('[data-cy=dataSobrenome]')
      .type('Teste12345{backspace}{backspace}')
      .should('have.value', 'Teste123')

    cy.get('#elementosForm\\:sugestoes')
      .clear()
      .type('erro{selectall}acerto', {delay: 100})
      .should('have.value', 'acerto')
  })

  it('RadioButton', () => {
    cy.get('#formSexoFem')
      .click()
      .should('be.checked')

    cy.get('#formSexoMasc')
      .should('not.be.checked')

    cy.get('[name=formSexo]')
      .should('have.length', 2)
  })

  it('CheckBox', () => {
    cy.get('#formComidaPizza')
      .click()
      .should('be.checked')

    cy.get('[name=formComidaFavorita]').click({ multiple: true })
    cy.get('#formComidaPizza').should('not.be.checked')
    cy.get('#formComidaVegetariana').should('be.checked')
  })

  it('Combo', () => {
    cy.get('[data-test=dataEscolaridade]')
      .select('2o grau completo')
      .should('have.value', '2graucomp')

    cy.get('[data-test=dataEscolaridade]')
      .select('1graucomp')
      .should('have.value', '1graucomp')

    cy.get('[data-test=dataEscolaridade] option')
      .should('have.length', 8)

    cy.get('[data-test=dataEscolaridade] option').then(els => {
      const values = []

      els.each(function(){
        values.push(this.innerHTML)
      })
      expect(values).to.include.members(['Superior', 'Mestrado'])
    })
  })

  it.only('Combo multiplo', () => {
    cy.get('[data-testid=dataEsportes]')
      .select(['natacao', 'Corrida', 'nada'])

    cy.get('[data-testid=dataEsportes]').then(el => {
      // valores selecionados
      expect(el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
      expect(el.val()).to.have.length(3)
    })

    cy.get('[data-testid=dataEsportes]')
      .invoke('val')
      .should('eql', ['natacao', 'Corrida', 'nada'])
  })
})

describe('Helpers...', () => {
  it('Wrap', () => {
    const obj = {
      nome: 'User',
      idade: 20
    }

    // expect(obj).to.have.property('nome')
    cy.wrap(obj).should('have.property', 'nome')


    cy.visit('http://wcaquino.me/cypress/componentes.html')
    // cy.get('#formNome').type('Cypress testt')
    cy.get('#formNome').then(el => {
      // el.val('funciona via jquery')
      cy.wrap(el).type('funciona via jquery')
    })


    const prom = new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve(11)
      }, 500)
    })

    cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
    // prom.then(num => console.log(num)) // ordem dessincronizado
    cy.wrap(prom).then(num => console.log(num)) // sincronizado com cypress
    cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))
  })

  it('Its', () => {
    const obj = {
      nome: 'User',
      idade: 20,
      endereco: {
        rua: 'rua dos bobos'
      }
    }

    // cy.wrap(obj).should('have.property', 'nome', 'User')
    cy.wrap(obj).its('nome').should('be.equal', 'User')

    cy.wrap(obj).its('endereco').should('have.property', 'rua')
    // cy.wrap(obj).its('endereco').its('rua').should('contain', 'bobo')
    cy.wrap(obj).its('endereco.rua').should('contain', 'bobo')

    cy.visit('http://wcaquino.me/cypress/componentes.html')
    cy.title().its('length').should('be.equal', 20)
  })

  // executar funções com o cypress
  it.only('Invoke', () => {
    const getValue = () => 1
    const soma = (a, b) => a + b

    cy.wrap({fn:getValue}).invoke('fn').should('be.equal', 1)
    cy.wrap({fn:soma}).invoke('fn', 2, 5).should('be.equal', 7) // 2 + 5 = 7

    cy.visit('http://wcaquino.me/cypress/componentes.html')
    cy.get('#formNome').invoke('val', 'Texto via invoke')

    cy.window().invoke('alert', 'Da pra ver?')

    cy.get('#resultado')
      .invoke('html', '<input type="button" value="jquery">')
  })
})

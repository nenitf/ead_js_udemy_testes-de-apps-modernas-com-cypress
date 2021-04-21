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
})

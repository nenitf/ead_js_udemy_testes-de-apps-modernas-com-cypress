describe('Work with alert', () => {
  before(() => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Alert', () => {
    cy.get('#alert').click()
    cy.on('window:alert', msg => {
      expect(msg).eq('Alert Simples')
    })
  })

  it('Alert com mock', () => {
    const stub = cy.stub().as('alerta')
    cy.on('window:alert', stub)
    cy.get('#alert').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
    })
  })

  it('Confirm', () => {
    // mocks primeiro
    cy.on('window:confirm', msg => {
      // por padrão clica no ok
      expect(msg).eq('Confirm Simples')
    })

    cy.on('window:alert', msg => {
      expect(msg).eq('Confirmado')
    })

    cy.get('#confirm').click()
  })

  it('Confirm', () => {
    cy.on('window:confirm', msg => {
      expect(msg).eq('Confirm Simples')
      return false // clicou em cancelar
    })

    cy.on('window:alert', msg => {
      expect(msg).eq('Negado')
    })

    cy.get('#confirm').click()
  })

  it.only('Prompt', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('42')
    })
    cy.on('window:confirm', msg => {
      expect(msg).eq('Era 42?')
    })

    cy.on('window:alert', msg => {
      expect(msg).eq(':D')
    })

    cy.get('#prompt').click()
  })
})

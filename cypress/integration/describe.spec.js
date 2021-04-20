it('a external test...', () => {
})

describe('Should group pass', () => {
  describe('Should group more specific', () => {
    it('a specific test', () => {
    })

    it.skip('a specific skiped test', () => {
    })
  })

  describe.skip('Should group more specific skipped', () => {
    it('a specific test2', () => {
    })
    it('a specific test2', () => {
    })
    it('a specific test2', () => {
    })
    it('a specific test2', () => {
    })
  })

  it('a internal test', () => {
  })

  // it.only('a internal only test', () => { })
})

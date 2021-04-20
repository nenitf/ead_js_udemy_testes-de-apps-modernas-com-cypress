it('Equality', () => {
  const a  = 1;

  expect(a, 'Deveria ser 1').equal(1)
  // expect(a, 'Deveria ser 2').equal(2)
  expect(a).to.be.equal(1)
  expect(a).not.to.be.equal(2)
})

it('Truthly', () => {
  const a  = true;

  expect(a).to.be.true
  expect(a).not.to.be.false

  expect(null).to.be.null
  expect(null).not.to.be.undefined
})

it('Object equality', () => {
  const obj = {
    a: 1, 
    b: 2
  }

  expect(obj).equal(obj)
  expect(obj).equals(obj)
  expect(obj).eq(obj)

  // expect(obj).eq({ a: 1, b: 2 })
  expect(obj).deep.eq({ a: 1, b: 2 })
  expect(obj).eql({ a: 1, b: 2 })
  expect(obj).include({ a: 1 })
  expect(obj).to.have.property('a')
  expect(obj).to.have.property('b', 2)
  expect(obj).to.not.be.empty
})

it('Arrays', () => {
  const arr = [1,2,3]

  expect(arr).to.have.members([1,2,3])
  expect(arr).to.include.members([1,3])
})

it('Types', () => {
  const num = 1
  const str = 'texto'

  expect(num).to.be.a('number')
  expect(str).to.be.a('string')
  expect({}).to.be.an('object')
})

it('String', () => {
  const str = 'String de teste'

  expect(str).eq('String de teste')
  expect(str).to.have.length(15)
  expect(str).to.contains('de')
  expect(str).to.match(/de/)
  expect(str).to.match(/^String/)
  expect(str).to.match(/teste$/)
  expect(str).to.match(/.{15}/)
  expect(str).to.match(/\w+/)
  expect(str).to.match(/\D+/)
})

it('Numbers', () => {
  const number = 4
  const floatNumber = 4.2123

  expect(number).eq(4)
  expect(number).to.be.above(2)
  expect(number).to.be.below(200)

  expect(floatNumber).to.be.closeTo(4.2, 0.1) // numero, precisão
})

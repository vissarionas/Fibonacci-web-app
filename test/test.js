const chai = require('chai')
const mocha = require('mocha')
const fibGenerator = require('../components/fib-generator')
const getPrimes = require('../components/primes-generator')

mocha.describe('FibGenerator' , () => {
    mocha.it('Fib-generator should return 8 with input 6', () => {
        chai.assert.equal(fibGenerator(6), 8)
    })
    mocha.it('GetPrimes' , () => {
        chai.assert.typeOf(getPrimes(13), 'array')
    })
})

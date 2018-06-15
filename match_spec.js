const { expect, use } = require('chai')
const dirtyChai = require('dirty-chai')
const { _, def, draw } = require('./match')

use(dirtyChai)

describe('Match.js', () => {
  describe('#def', () => {
    it('is a function', () => {
      expect(def).to.be.a('function')
    })

    it('returns a function', () => {
      expect(def('ignoreMe')).to.be.a('function')
    })
  })

  describe('#draw', () => {
    it('is a function', () => {
      expect(draw).to.be.a('function')
    })

    it('returns a function', () => {
      expect(draw('ignoreMe')).to.be.a('function')
    })

    context('when there are defined functions', () => {
      before(() => {
        def('foobar', ['foo', _], (a, b) => `a is foo, b is ${b}`)
        def('foobar', ['bar', _], (a, b) => `a is bar, b is ${b}`)
      })

      it('matches when left arg is foo', () => {
        const foobar = draw('foobar')
        expect(foobar('foo', 99)).to.equal('a is foo, b is 99')
      })

      it('matches when left arg is bar', () => {
        const foobar = draw('foobar')
        expect(foobar('bar', 2000)).to.equal('a is bar, b is 2000')
      })
    })
  })
})

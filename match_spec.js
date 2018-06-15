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

    context('defining isFigureCard', () => {
      let isFigureCard

      before(() => {
        def('isFigureCard', [_, 'J'], (suit, value) => {
          return true
        })

        def('isFigureCard', [_, 'Q'], (suit, value) => {
          return true
        })

        def('isFigureCard', [_, 'K'], (suit, value) => {
          return true
        })

        isFigureCard = def('isFigureCard', [], (suit, value) => {
          return false
        })
      })

      it('matches king of spades', () => {
        const kingOfSpaces = ['♠', 'K']
        expect(isFigureCard(...kingOfSpaces)).to.be.true()
      })

      it('matches nine of clubs', () => {
        const nineOfClubs = ['♣', '9']
        expect(isFigureCard(...nineOfClubs)).to.be.false()
      })

      it('matches three of hearts', () => {
        const threeOfHearts = ['❤', '3']
        expect(isFigureCard(...threeOfHearts)).to.be.false()
      })

      it('matches queen of diamonds', () => {
        const queenOfDiamonds = ['♦', 'Q']
        expect(isFigureCard(...queenOfDiamonds)).to.be.true()
      })

      it('matches A of diamonds', () => {
        expect(isFigureCard('♦', 'A')).to.be.false()
      })

      it('matches ten of clubs', () => {
        expect(isFigureCard('♣', '10')).to.be.false()
      })

      it('matches knight of clubs', () => {
        expect(isFigureCard('♣', 'J')).to.be.true()
      })
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

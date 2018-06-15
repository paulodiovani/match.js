const { expect, use } = require('chai')
const dirtyChai = require('dirty-chai')
const def = require('./match')

use(dirtyChai)

describe('Match.js', () => {
  it('returns a function', () => {
    expect(def).to.be.a('function')
  })
})

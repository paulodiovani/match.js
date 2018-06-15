# Match.js

Simple pattern matching for Javascript.

⚠ This is still a work in progress.

## Usage

```js
const { _, def } = require('./match')

// define functions
def('isFigureCard', [_, 'J'], (suit, value) => {
  return true
})

def('isFigureCard', [_, 'Q'], (suit, value) => {
  return true
})

def('isFigureCard', [_, 'K'], (suit, value) => {
  return true
})

const isFigureCard = def('isFigureCard', [], (suit, value) => {
  return false
})

// cards for testing
const kingOfSpaces = ['♠', 'K']
const nineOfClubs = ['♣', '9']
const threeOfHearts = ['❤', '3']
const queenOfDiamonds = ['♦', 'Q']

// does it works?
isFigureCard(...kingOfSpaces) // true
isFigureCard(...nineOfClubs) // false
isFigureCard(...threeOfHearts) // false
isFigureCard(...queenOfDiamonds) // true

// some more
isFigureCard('♦', 'A') // false
isFigureCard('♣', '10') // false
isFigureCard('♣', 'J') // true
```

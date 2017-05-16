const db = require('../db')

class Artist {
  constructor () {}

  static getAll () {
    return db('artists')
  }
}

module.exports = Artist

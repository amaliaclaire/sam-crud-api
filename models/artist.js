const db = require('../db')

class Artist {
  constructor () {}

  static getAll () {
    return db('artists')
  }

  static getOne (id) {
    return db('artists').where({ id }).first()
  }

  static delete (id) {
    return db('artists').where({ id }).del().returning('*')
  }
}

module.exports = Artist

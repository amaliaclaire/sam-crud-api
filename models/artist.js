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

  static create ({ first_name, last_name, nationality }) {
    const artist = { first_name, last_name, nationality }
    return db('artists').insert(artist).returning('*')
  }
}

module.exports = Artist

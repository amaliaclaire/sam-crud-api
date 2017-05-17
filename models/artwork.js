const db = require('../db')

class Artwork {
  constructor () {}

  static getAll () {
    return db('artworks')
  }

  static getOne (id) {
    return db('artworks').where({ id }).first()
  }

  static delete (id) {
    return db('artworks').where({ id }).del().returning('*')
  }

  static create ({ name, description, year, artist_id }) {
    const artwork = { name, description, year, artist_id }
    return db('artworks').insert(artwork).returning('*')
  }
}

module.exports = Artwork

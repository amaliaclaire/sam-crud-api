const db = require('../db')

class Artwork {
  constructor () {}

  static get (id) {
    return id ? db('artworks').where({ id }).first() : db('artworks')
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

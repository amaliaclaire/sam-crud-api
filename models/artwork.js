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

  static update (id, { name, description, year, artist_id }) {
    const artwork = { name, description, year, artist_id }
    for (var key in artwork) {
      if (artwork[key] === undefined) delete artwork[key]
    }

    return db('artworks').update(artwork).where({ id }).returning('*')
  }
}

module.exports = Artwork

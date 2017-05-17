const db = require('../db')
const Artwork = require('./artwork')

class Artist {
  constructor () {}

  static get (id) {
    return id ? db('artists').where({ id }).first() : db('artists')
  }

  static populate (id) {
    if (id) {
      return db('artists').where({ id }).first().then(artist => {
        const id = artist.id
        return Artwork.get().where({ artist_id: id }).then(artworks => {
          artist.artworks = artworks
          return artist
        })
      })

      // return db('artists')
      //   .innerJoin('artworks', 'artworks.artist_id', 'artists.id')
      //   .where('artists.id', id)

      // return Promise.all([
      //   db('artists').where({ id }).first(),
      //   Artwork.get().where({ artist_id: id })
      // ]).then(([artist, artworks]) => {
      //   artist.artworks = artworks
      //   return artist
      // })
    } else {
      return db('artists').then(artists => {
        const promises = artists.map(artist => {
          return Artwork.get().where({ artist_id: artist.id })
            .then(artworks => {
              artist.artworks = artworks
              return artist
            })
        })

        return Promise.all(promises)
      })

      // return db('artists')
      //   .innerJoin('artworks', 'artworks.artist_id', 'artists.id')

      // return Promise.all([
      //   db('artists'),
      //   Artwork.get()
      // ])
    }
  }

  static delete (id) {
    return db('artists').where({ id }).del().returning('*')
  }

  static create ({ first_name, last_name, nationality }) {
    const artist = { first_name, last_name, nationality }
    return db('artists').insert(artist).returning('*')
  }

  static update (id, { first_name, last_name, nationality }) {
    const artist = { first_name, last_name, nationality }
    for (var key in artist) {
      if (artist[key] === undefined) delete artist[key]
    }

    return db('artists').update(artist).where({ id }).returning('*')
  }
}

module.exports = Artist

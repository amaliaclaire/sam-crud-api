const db = require('../db')

class Collection {
  constructor () {}

  static get (id) {
    return id ? db('collections').where({ id }).first() : db('collections')
  }

  static delete (id) {
    return db('collections').where({ id }).del().returning('*')
  }

  static create ({ name }) {
    const collection = { name }
    return db('collections').insert(collection).returning('*')
  }

  static update (id, { name }) {
    const collection = { name }
    for (var key in collection) {
      if (collection[key] === undefined) delete collection[key]
    }

    return db('collections').update(collection).where({ id }).returning('*')
  }
}

module.exports = Collection

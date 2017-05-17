const Collection = require('../models/collection')

const getAll = (req, res) => {
  Collection.get().then(collections => {
    res.json(collections)
  })
}

const getOne = (req, res) => {
  const id = req.params.id
  Collection.get(id).then(collection => {
    res.json(collection)
  })
}

const del = (req, res) => {
  const id = req.params.id
  Collection.delete(id).then(([collection]) => {
    res.json(collection)
  })
}

const create = (req, res) => {
  Collection.create(req.body).then(([collection]) => {
    res.json(collection)
  })
}

const update = (req, res) => {
  const id = req.params.id
  Collection.update(id, req.body).then(([collection]) => {
    res.json(collection)
  })
}

module.exports = {
  getAll, getOne, del, create, update
}

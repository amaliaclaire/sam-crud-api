const Artist = require('../models/artist')

const getAll = (req, res) => {
  Artist.get().then(artists => {
    res.json(artists)
  })
}

const getOne = (req, res) => {
  const id = req.params.id
  Artist.get(id).then(artist => {
    res.json(artist)
  })
}

const del = (req, res) => {
  const id = req.params.id
  Artist.delete(id).then(([artist]) => {
    res.json(artist)
  })
}

const create = (req, res) => {
  Artist.create(req.body).then(([artist]) => {
    res.json(artist)
  })
}

const update = (req, res) => {
  const id = req.params.id
  Artist.update(id, req.body).then(([artist]) => {
    res.json(artist)
  })
}

module.exports = {
  getAll, getOne, del, create, update
}

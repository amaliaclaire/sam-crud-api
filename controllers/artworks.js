const Artwork = require('../models/artwork')

const getAll = (req, res) => {
  Artwork.getAll().then(artworks => {
    res.json(artworks)
  })
}

const getOne = (req, res) => {
  const id = req.params.id
  Artwork.getOne(id).then(artwork => {
    res.json(artwork)
  })
}

const del = (req, res) => {
  const id = req.params.id
  Artwork.delete(id).then(([artwork]) => {
    res.json(artwork)
  })
}

const create = (req, res) => {
  Artwork.create(req.body).then(([artwork]) => {
    res.json(artwork)
  })
}

module.exports = {
  getAll, getOne, del, create
}

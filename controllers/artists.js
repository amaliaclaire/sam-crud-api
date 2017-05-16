const Artist = require('../models/artist')

const getAll = (req, res) => {
  Artist.getAll().then(artists => {
    res.json(artists)
  })
}

module.exports = {
  getAll
}

const Artist = require('../models/artist')

const getAll = (req, res) => {
  const message = Artist.getAll()
  res.json(message)
}

module.exports = {
  getAll
}

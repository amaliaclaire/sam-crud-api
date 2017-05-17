const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const artists = require('./routes/artists')
const artworks = require('./routes/artworks')
const collections = require('./routes/collections')

app.use(require('body-parser').json())
app.use(require('morgan')('dev'))

app.use('/artists', artists)
app.use('/artworks', artworks)
app.use('/collections', collections)

const listener = (req, res) => {
  console.log(`Hi. I am listening on port ${port}.`)
}

app.listen(port, listener)

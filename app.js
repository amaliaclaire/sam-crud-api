const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const artists = require('./routes/artists')
const artworks = require('./routes/artworks')
const collections = require('./routes/collections')

app.use(bodyParser.json())
app.use('/artists', artists)
app.use('/artworks', artworks)
app.use('/collections', collections)

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.listen(port, listener)

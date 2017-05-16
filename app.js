const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const artists = require('./routes/artists')

app.use('/artists', artists)

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.listen(port, listener)

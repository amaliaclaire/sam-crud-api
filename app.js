const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const listener = (req, res) => {
  console.log('Hi. I am listening.')
}

app.get('/artists', (req, res) => {
  res.json({ message: 'hi' })
})

app.listen(port, listener)

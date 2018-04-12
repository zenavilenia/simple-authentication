const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('masuk')
})

// const index = require('./routes/index.js')
// app.use('/', index)

app.listen(3000)
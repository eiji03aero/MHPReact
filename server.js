const express = require('express')
const app = express()
const NeDB = require('nedb')
const path = require('path')
const portNo = 3000

const db = new NeDB({
  filename: path.join(__dirname, 'db/test.db'),
  autoload: true
})

app.use('/out', express.static(path.join(__dirname, 'out')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('something went wrong...')
})

app.listen(portNo, () => {
  console.log('started server...')
})

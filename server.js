const express = require('express')
const app = express()
const path = require('path')
const portNo = 3000

app.use(express.static(path.join(__dirname, 'public')))

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

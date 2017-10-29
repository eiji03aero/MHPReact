const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')

const app        = express()
const portNo     = 3000

const apiWiki = require('./routes/apiWiki.js')

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

// Automatically respond to serve public dir
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routings
app.use('/api/wiki', apiWiki)

// Error Handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('something went wrong...')
})

// Start listening
app.listen(portNo, () => console.log(`started server at http://localhost:${portNo}`))

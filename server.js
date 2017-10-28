const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const cors       = require('cors')

const app        = express()
const portNo     = 3000

const api = require('./routes/api.js')

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Automatically response
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routings
app.use('/api', api)

// Error Handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('something went wrong...')
})

// Start listening
app.listen(portNo, () => console.log(`started server at http://localhost:${portNo}`))

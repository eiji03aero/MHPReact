const express    = require('express')
const http       = require('http')
const mongoose   = require('mongoose')
const path       = require('path')
const bodyParser = require('body-parser')
const logger     = require('morgan')

const app        = express()
const portNo     = 3000
const mongodbUrl = 'mongodb://localhost/mhp'

const apiWiki = require('./routes/apiWiki.js')

// Port setting
app.set('port', process.env.port || 3000)

// Middlewares
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

// Automatically respond to serve public dir
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routings
app.use('/api/wiki', apiWiki)
const Wiki = require('./models/wikiModel.js')
app.get('/modeltest', (req,res) => {
  Wiki.findOne({}, (err,doc) => {
    if (err) {
      console.error(errr)
      res.send(err)
    }
    res.send(doc)
  })
})

// catch 404 error
app.use((err, req, res, next) => {
  var err = new Error('Not found')
  err.status = 404
  next(err)
})

// Dev Error Handling
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// Production Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

// Start listening
http.createServer(app).listen(app.get('port'), () => {
  console.log(`express server started listening on ${app.get('port')}`)
  mongoose.connect(mongodbUrl, { useMongoClient: true })
})

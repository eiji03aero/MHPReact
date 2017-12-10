const express    = require('express')
const http       = require('http')
const mongoose   = require('mongoose')
const path       = require('path')
const bodyParser = require('body-parser')
const logger     = require('morgan')
const favicon    = require('serve-favicon')

const app         = express()
const { mongodb } = require('./config/config.js')

const apiApp     = require('./routes/apiApp.js')
const apiWiki    = require('./routes/apiWiki.js')
const apiComment = require('./routes/apiComment.js')

const useWebpackDevServer = require('./scripts/config/webpack-dev-server.js')

// Port setting
app.set('port', process.env.port || 3000)

// Some basics
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'public', 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/build')))

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Automatically respond to serve public dir
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public/index.html')) })
app.get('/sample', (req, res) => { res.sendFile(path.join(__dirname, 'public/sample-index.html')) })

// Custom MiddleWares
// if (process.env.NODE_ENV !== 'production') {
//   useWebpackDevServer(app)
// }

// Routings
app.use('/api/app', apiApp)
app.use('/api/wiki', apiWiki)
app.use('/api/comment', apiComment)

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
  mongoose.connect(mongodb.url, mongodb.options, (err) => {
    if (err) return console.log(err)
    console.log('mongodb is ready to use now')
  })
})

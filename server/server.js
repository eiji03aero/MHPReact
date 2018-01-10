const express    = require('express')
const http       = require('http')
const mongoose   = require('mongoose')
const path       = require('path')
const bodyParser = require('body-parser')
const logger     = require('morgan')
const favicon    = require('serve-favicon')

const app         = express()
const { mongodb } = require('./config/config.js')
const statusMessage = require('./config/message.js')

const apiApp     = require('./routes/apiApp.js')
const apiWiki    = require('./routes/api/v1/wiki.js')

// const useWebpackDevServer = require('./scripts/config/webpack-dev-server.js')

// Port setting
app.set('port', process.env.port || 3000)

// Some basics
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../public/views'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public/build')))

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, '../public/favicon.ico')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Request-Headers", "*")
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

// Automatically respond to serve public dir
app.use('/', express.static('public'))

// Custom MiddleWares
// if (process.env.NODE_ENV !== 'production') {
//   useWebpackDevServer(app)
// }

// Routings
app.use('/api/app', apiApp)
app.use('/api/v1/wiki', apiWiki)

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
  console.log(statusMessage.startExpress(app.get('port')))
  mongoose.connect(mongodb.url, mongodb.options, (err) => {
    if (err) return console.log(err)
    console.log(statusMessage.startMongo)
  })
})

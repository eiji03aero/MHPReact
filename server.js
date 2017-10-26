const express = require('express')
const app = express()
const portNo = 3000
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const collection = require('./mongoDataBase.js')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/api/get/:wikiname', (req,res) => {
  const wikiname = req.params.wikiname
  collection('mhp').findOne({ name: wikiname }, (err,doc) => {
    if (err) {
      res.json({ status: false, msg: err })
      return
    }
    if (!doc) return res.send('dameda')
    res.json({ status: true, data: doc})
  })
})

app.post('/api/post/:wikiname', (req,res) => {
  const wikiname = req.params.wikiname
  let body
  collection('mhp').findOne({ name: wikiname }, (err,doc) => {
    if (err) {
      res.json({ status: false, msg: err })
      return
    }
    body = req.body.body
    if (doc.length === 0) {
      db.insert({ name: wikiname, body })
    } else {
      collection('mhp').update({ name: wikiname }, {$set: { body: body } }, { upsert: true }) 
    }
    res.json({ status: true })
  })
})

// Error Handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('something went wrong...')
})

app.listen(portNo, () => {
  console.log(`started server at http://localhost:${portNo}`)
})

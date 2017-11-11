const express = require('express')
const router = express.Router()

const Wiki = require('../models/wiki.js')

router.get('/show', (req,res) => {
  Wiki.find().toArray((err,docs) => {
    if (err) {
      res.json({ status: false, err: err })
      return
    }
    if (!docs) return res.send('naiyade')
    res.json({ status: true, data: docs })
  })
})

router.get('/get/:wikiname', (req,res) => {
  const wikiname = req.params.wikiname
  Wiki.findOne({ name: wikiname }, (err,doc) => {
    if (err) {
      res.json({ status: false, msg: err })
      return
    }
    if (!doc) return res.send('dameda')
    res.json({ status: true, data: doc})
  })
})

// router.post('/post/:wikiname', (req,res) => {
//   const wikiname = req.params.wikiname
//   let body
//   Wiki.findOne({ name: wikiname }, (err,doc) => {
//     if (err) {
//       res.json({ status: false, msg: err })
//       return
//     }
//     body = req.body.body
//     if (!doc) {
//       Wiki.insertOne({ name: wikiname, body })
//     } else {
//       Wiki.update({ name: wikiname }, {$set: { body: body } }, { upsert: true }) 
//     }
//     res.json({ status: true })
//   })
// })
//
module.exports = router

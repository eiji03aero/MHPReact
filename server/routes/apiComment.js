const express = require('express')
const router = express.Router()

const Comment = require('../models/comment.js')

router.get('/index', (req,res) => {
  Comment.find().toArray((err, docs) => {
    if (err) {
      res.json({ status: false, err: err })
    }
    if (!docs) res.json({ status: false, err: 'naiyade'})
    res.json({ status: true, data: docs })
  })
})

router.post('/create', (req,res) => {
  Comment.create({
    author: 'osakabe',
    comment: 'domodomo'
  }, (err) => {
    if (err) return console.log(err)
    res.json({ status: true, msg: 'iine' })
  })
})

module.exports = router

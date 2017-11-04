const express = require('express')
const router = express.Router()

const Wiki = require('../models/Wiki.js')

router.get('/show', (req,res) => {
  const newWiki = new Wiki()

  Wiki.title = 'test'
  Wiki.body = 'testbody'

  Wiki.save(function (err) {
    if (err) {
      console.log(err)
      res.json({ status: 500, msg: err})
    }
    res.json({ status: 200, msg: 'success' })
  })
})

module.exports = router

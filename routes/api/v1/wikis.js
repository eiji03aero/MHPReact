// GET /api/v1/wiki/ => index
// POST /api/v1/wiki/ => create
// GET /api/v1/wiki/:id => show
// POST /api/v1/wiki/:id => update

const express = require('express')
const router = express.Router()
const v4 = require('uuid/v4')

const Wiki = require('../../../models/wiki.js')

router.get('/', (req,res) => {
  Wiki.find().toArray((err,docs) => {
    if (err) {
      res.json({ status: false, err: err })
      return
    }
    if (!docs) return res.send('naiyade')
    res.json({ status: true, data: docs })
  })
})

router.post('/', (req,res) => {
  const { title, body } = req.body
  const newWiki = new Wiki({
    id: v4(),
    title: title,
    body: body
  })

  newWiki.save((err, createdWiki) => {
    if (err) throw new Error(err)
    res.json(createdWiki)
  })
})

router.get('/:id', (req,res) => {
  const { id } = req.params
  Wiki.findOne({ id: id }, (err,wiki) => {
    if (err) {
      res.json({ status: false, msg: err })
      return
    }
    if (!doc) return res.send('dameda')
    res.json({ status: true, data: wiki})
  })
})

router.post('/:id', (req,res) => {
  const { id, title, body } = req.body
  Wiki.findById(id, (err, wiki) => {
    if (err) throw new Error(err)
    wiki.title = title
    wiki.body = body

    wiki.save((err, updatedWiki) => {
      if (err) throw new Error(err)
      res.json(updatedWiki)
    })
  })
})

module.exports = router

// GET /api/v1/wiki/ => index
// POST /api/v1/wiki/ => create
// GET /api/v1/wiki/:id => show
// POST /api/v1/wiki/:id => update
// DELETE /api/v1/wiki/:id/delete => delete

const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid/v4')
const ObjectID = require('mongodb').ObjectID

const Wiki = require('../../../models/wiki.js')

router.get('/index', (req,res) => {
  Wiki.find({}, (err,docs) => {
    if (err) {
      console.log(err)
      res.json({ status: false, err: err })
      return
    }
    res.json({ status: true, wikis: docs })
  })
})

router.post('/create', (req,res) => {
  const { title, body } = req.body
  const newWiki = new Wiki({
    title: title,
    body: body
  })

  newWiki.save((err, createdWiki) => {
    if (err) throw new Error(err)
    res.json(createdWiki)
  })
})

router.get('/show', (req,res) => {
  Wiki.findOneById( req.body._id, (err,wiki) => {
    if (err) {
      return res.json({ status: false, msg: err })
    }
    res.json({ status: true, data: wiki})
  })
})

router.post('/update', (req,res) => {
  const { id, title, body } = req.body
  Wiki.findOneById( id, (err, wiki) => {
    if (err) throw new Error(err)
    wiki.title = title
    wiki.body = body

    wiki.save((err, updatedWiki) => {
      if (err) throw new Error(err)
      res.json(updatedWiki)
    })
  })
})

router.post('/destroy', (req, res) => {
  Wiki.findByIdAndRemove( req.body._id, (err, deletedWiki) => {
    return err ?
      res.json({ status: false, message: 'failed'}) :
      res.json({ status: true, message: 'successfully deleted'})
  })
})

module.exports = router

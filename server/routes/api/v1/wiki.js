// GET /api/v1/wiki/index => index
// POST /api/v1/wiki/create => create
// GET /api/v1/wiki/show=> show
// POST /api/v1/wiki/update => update
// POST /api/v1/wiki/destroy => delete

const express = require('express')
const router = express.Router()

const Wiki = require('../../../models/wiki.js')

router.get('/index', (req,res) => {
  Wiki.find({}, (err, docs) => {
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
    res.json({ status: true, wiki: createdWiki })
  })
})

// router.get('/show', (req,res) => {
//   Wiki.findById( req.body._id, (err,wiki) => {
//     if (err) {
//       return res.json({ status: false, msg: err })
//     }
//     res.json({ status: true, data: wiki})
//   })
// })

router.put('/:id', (req,res) => {
  const { _id, title, body } = req.body
  Wiki.findById(_id, (err, wiki) => {
    if (err) return console.log(err)
    wiki.title = title
    wiki.body = body

    wiki.save((err, updatedWiki) => {
      if (err) throw new Error(err)
      res.json({ status: true, wiki: updatedWiki })
    })
  })
})

router.delete('/:id', (req, res) => {
  Wiki.findByIdAndRemove( req.params.id, (err, deletedWiki) => {
    return err ?
      res.json({ status: false }) :
      res.json({ status: true, _id: deletedWiki._id })
  })
})

module.exports = router

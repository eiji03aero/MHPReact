const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wikiSchema = new Schema({
  title: { type: String, require: true, unique: true },
  body: { type: String, require: true }
})

const Wiki = mongoose.model('Wiki', wikiSchema)

module.exports = Wiki

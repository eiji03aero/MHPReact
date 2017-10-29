const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wiki = new Schema({
  wikiname: { type: String, require: true, unique: true },
  wikibody: { type: String, require: true }
})

module.exports = mongoose.model('Wiki', Wiki)

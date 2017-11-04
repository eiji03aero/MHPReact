const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: { type: String, require: true },
  comment: { type: String, require: true },
  time: { type: Date, require: true, default: Date.now }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mhp'
const assert = require('assert')
let db
let collection

MongoClient.connect(url, (err, mongodb) => {
  if (err) return
  console.log('connected to server successfully')
  db = mongodb
})

collection = name => db.collection(name)

module.exports = collection

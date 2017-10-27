const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mhp'
const assert = require('assert')
let db

MongoClient.connect(url, (err, mongodb) => {
  if (err) return
  console.log('connected to server successfully')
  db = mongodb
})

const collection = name => db.collection(name)

module.exports = collection

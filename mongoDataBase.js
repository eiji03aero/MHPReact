const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mhp'

MongoClient.connect(url, (err, db) => {
  console.log('connecting to mongodb...')
  db.close()
})


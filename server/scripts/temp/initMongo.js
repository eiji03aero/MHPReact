const Wiki = require('../models/wiki.js')

const test1 = new Wiki({
  title: 'test title',
  body: 'koreha test dato omottaka!'
})

test1.save((err) => {
  if (err) console.log(err)
})
console.log('i think i saved it')

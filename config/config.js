module.exports = {
  mongodb: {
    url: 'mongodb://localhost:27017/mhp',
    options: {
      useMongoClient: true,
      promiseLibrary: require('bluebird')
    }
  }
}

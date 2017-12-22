module.exports = {
  startExpress: function (port) {
    var portNum = port || "Avaron"
    return (
  `
  <========================================>

  Express server has commenced WAR 🎉🎉
  Port: ${portNum}

  <========================================>
  `
    )
  },
  
  startMongo: `
  <========================================>
  
  MongoDB has got his own shit started ma!!
  
  <========================================>
  `
}

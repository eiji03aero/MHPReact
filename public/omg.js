( function () {
  var url = '/get_test'
  var request = new XMLHttpRequest

  request.addEventListener("load", transferComplete);
  request.open('GET', 'http://localhost:3000/get_test')
  request.send()
  request.then( function (res, err) {
      return console.log(res,err)
    })

  function transferComplete (e) {
    console.log('you made it man: ', e)
  }
})()

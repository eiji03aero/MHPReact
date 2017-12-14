import C from '../constants.js'
import request from 'superagent'

export const getTest = () => {
  console.log('before calling')
  request
    .get('/get_test')
    .end((err, res) => {
      if (err) {
        console.log('after calling error')
        return { type: C.GET_TEST, message: err }
      } else {
        console.log('after calling')
        console.log(res)
        return { type: C.GET_TEST, message: res.body.data }
      }
    })
}

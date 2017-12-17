import C from '../constants.js'
import request from 'superagent'

export const getTest = () => {
  return dispatch => {
    request
      .get('/get_test')
      .end((err, res) => {
        if (err) {
          return dispatch({ type: C.GET_TEST, message: err })
        } else {
          return dispatch({ type: C.GET_TEST, message: res.body.data })
        }
      })
  }
}

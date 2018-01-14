import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'
import actions from '../actions/app.js'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'localhost://3000/api/v1'

const responseBody = res => res.body

export const requests = {
  get: (dispatch, url) => {
    console.log('started calling get')
    dispatch(actions.startLoading())
    superagent
      .get(`${url}`)
      .then(res => {
        dispatch(actions.finishLoading())
        return res.body
      }, err => {
        dispatch(actions.finishLoading())
        console.log(error)
        action.error = true
        action.payload = error
        return action
      })
  },
  post: (url, body) => {
    superagent
      .post(`${API_ROOT}${url}`, body)
      .set('Content-Type', 'application/json')
      .then(responseBody)
      .catch(err => console.log('error in post'))
  },
  put: url => {
    superagent
      .put(`${API_ROOT}${url}`, body)
      .set('Content-Type', 'application/json')
      .then(responseBody)
      .catch(err => console.log('error in put'))
  },
  del: url => {
    superagent
      .get(`${API_ROOT}${url}`)
      .set('Content-Type', 'application/json')
      .then(responseBody)
      .catch(err => console.log('error in put'))
  }
}

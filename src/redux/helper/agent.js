import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'
import actions from '../actions/app.js'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'localhost://3000/api/v1'

const responseBody = res => res.body

const requests = {
  get: (url) =>
    superagent
      .get(url)
      .then(responseBody),

  post: (url, body) =>
    superagent
      .post(url, body)
      .set('Content-Type', 'application/json')
      .then(responseBody),

  put: (url, body) =>
    superagent
      .put(url, body)
      .set('Content-Type', 'application/json')
      .then(responseBody),

  del: url =>
    superagent
      .del(url)
      .set('Content-Type', 'application/json')
      .then(responseBody),
}

export default requests

import C from '../constants.js'
import request from 'superagent'

export const createWiki = (title, body) => {
  return dispatch => {
    request.post('/api/v1/wiki/')
      .set('Content-Type', 'application/json')
      .send({ title: title, body: body})
      .end((err, res) => {
        if (err || !res.ok) return console.log(err)
        const { _id, title, body } = res.body
        return dispatch({
          type: C.CREATE_WIKI,
          id: _id,
          title,
          body,
          timeStamp: new Date().toString()
        })
      })
  }
}

export const updateWiki = (id, title, body) =>
  ({
    type: C.UPDATE_WIKI,
    id,
    title,
    body
  })

export const removeWiki = (id) =>
  ({
    type: C.REMOVE_WIKI,
    id
  })

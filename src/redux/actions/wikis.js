import C from '../constants.js'
import request from 'superagent'

export const getAllWikis = () => {
  return dispatch => {
    request.get('/api/v1/wiki/index')
      .end((err, res) => {
        console.log('request ended')
        if (err || !res.ok) return console.log(err)
        const { wikis } = res.body
        return dispatch({
          type: C.GET_ALL_WIKI,
          wikis
        })
      })
  }
}

export const createWiki = (title, body) => {
  return dispatch => {
    request.post('/api/v1/wiki/create')
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

export const updateWiki = (_id, title, body) =>
  ({
    type: C.UPDATE_WIKI,
    _id,
    title,
    body
  })

export const removeWiki = (_id) => {
  return dispatch => {
    request.post('/api/v1/wiki/destroy')
      .set('Content-Type', 'application/json')
      .send({ _id })
      .end((err, res) => {
        if (err || !res.ok) return console.log(err, res)
        return dispatch({
          type: C.REMOVE_WIKI,
          _id
        })
      })
  }
}

import C from '../constants.js'
import { createActions } from 'redux-actions'
import request from 'superagent'
import actions from './app.js'

import { requests } from '../helper/agent.js'

// export const getAllWikis = () => {
//   return dispatch => {
//     dispatch(actions.startLoading())
//     request.get('/api/v1/wiki/index')
//       .end((err, res) => {
//         if (err || !res.ok) return console.log(err)
//         const { wikis } = res.body
//         dispatch(actions.finishLoading())
//         dispatch({
//           type: C.GET_ALL_WIKI,
//           wikis
//         })
//       })
//   }
// }

const wikiActions = createActions(
  {

  },
  C.GET_ALL_WIKI
)

export const getAllWikis = () => {
  return async dispatch => {
    const action = await requests.get(dispatch, '/api/v1/wiki/index')
    dispatch(actions.getAllWiki, action)
  }
}

export const createWiki = (title, body) => {
  return dispatch => {
    dispatch(actions.startLoading())
    request.post('/api/v1/wiki/create')
      .set('Content-Type', 'application/json')
      .send({ title: title, body: body})
      .end((err, res) => {
        if (err || !res.ok) return console.log(err)
        const { _id, title, body } = res.body
        dispatch(actions.finishLoading())
        dispatch({
          type: C.CREATE_WIKI,
          _id,
          title,
          body,
          timeStamp: new Date().toString()
        })
      })
  }
}

export const updateWiki = (_id, title, body) => {
  return dispatch => {
    dispatch(actions.startLoading())
    request.post('/api/v1/wiki/update')
      .set('Content-Type', 'application/json')
      .send({ _id, title, body })
      .end((err, res) => {
        if (err || !res.ok) return console.log(err)
        const { _id, title, body } = res.body
        dispatch(actions.finishLoading())
        dispatch({
          type: C.UPDATE_WIKI,
          _id,
          title,
          body,
          timeStamp: new Date().toString()
        })
      })
  }
}

export const removeWiki = (_id) => {
  return dispatch => {
    dispatch(actions.startLoading())
    request.post('/api/v1/wiki/destroy')
      .set('Content-Type', 'application/json')
      .send({ _id })
      .end((err, res) => {
        if (err || !res.ok) return console.log(err, res)
        dispatch(actions.finishLoading())
        return dispatch({
          type: C.REMOVE_WIKI,
          _id
        })
      })
  }
}


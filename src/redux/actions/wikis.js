import C from '../constants.js'
import { createActions } from 'redux-actions'
import request from 'superagent'
import appActions from './app.js'

import requests from '../helper/agent.js'

const wikiActions = createActions(
  {
    [C.GET_ALL_WIKI]: () => ({
      promise: requests.get('/api/v1/wiki/index'),
    }),

    [C.CREATE_WIKI]: (wiki) => ({
      promise: requests.post('/api/v1/wiki/create', wiki),
    }),

    [C.UPDATE_WIKI]: (wiki) => ({
      promise: requests.put(`/api/v1/wiki/${wiki._id}`, wiki)
    }),

    [C.DELETE_WIKI]: (_id) => ({
      promise: requests.del(`/api/v1/wiki/${_id}`)
    })
  },
)

export default wikiActions

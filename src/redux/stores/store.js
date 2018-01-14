import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer.js'
import stateData from './initialState.js'

import saver from './saverMiddleware.js'
import asyncMiddleware from './asyncMiddleware.js'

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver, thunkMiddleware, asyncMiddleware)(createStore)(
    rootReducer,
    (localStorage && localStorage['redux-storage']) ?
      JSON.parse(localStorage['redux-storage']) :
      stateData
  )
export default storeFactory

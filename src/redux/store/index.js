import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer.js'
import stateData from './initialState.js'

import saver from './saverMiddleware.js'
import asyncMiddleware from './asyncMiddleware.js'
import DevTools from '../../components/App/ui/DevTools.js'

const enhancer = compose(
  applyMiddleware(
    logger,
    saver,
    thunkMiddleware,
    asyncMiddleware
  ),
  DevTools.instrument()
)

const storeFactory = (initialState = stateData) =>
  createStore(
    rootReducer,
    initialState,
    enhancer
  )

export default storeFactory

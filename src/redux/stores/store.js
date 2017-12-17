import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer.js'
import stateData from './initialState.js'

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-storage'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver, thunkMiddleware)(createStore)(
    rootReducer,
    (localStorage && localStorage['redux-storage']) ?
      JSON.parse(localStorage['redux-storage']) :
      stateData
  )

export default storeFactory

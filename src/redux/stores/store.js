import { createStore, combineReducers, applyMiddleware } from 'redux'
import colors from '../reducers/colors.js'
import widgets from '../reducers/widgets.js'
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
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors, widgets }),
    (localStorage && localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      stateData
  )

export default storeFactory

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import app from '../reducers/app.js'
import colors from '../reducers/colors.js'
import wikis from '../reducers/wikis.js'
import widgets from '../reducers/widgets.js'
import welcome_page from '../reducers/welcome_page.js'
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
    combineReducers({ app, colors, wikis, widgets, welcome_page }),
    (localStorage && localStorage['redux-storage']) ?
      JSON.parse(localStorage['redux-storage']) :
      stateData
  )

export default storeFactory

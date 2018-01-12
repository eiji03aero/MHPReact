import C from '../constants.js'
import { createActions } from 'redux-actions'
import { v4 } from 'uuid'

const actions = createActions({
  [C.ADD_COLOR]: (title, color) => ({
    id: v4(),
    title,
    color,
    timeStamp: new Date().toString()
  }),

  [C.RATE_COLOR]: (rating, id) => ({
    rating,
    id
  }),

  [C.REMOVE_COLOR]: (id) => ({
    id
  })
})

export default actions

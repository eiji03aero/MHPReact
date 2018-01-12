import C from '../constants.js'
import { handleActions } from 'redux-actions'

const color = handleActions({
  [C.ADD_COLOR]: (state, action) => ({
    ...action.payload,
    rating: 0
  }),

  [C.RATE_COLOR]: (state, action) => {
    return state.id !== action.payload.id ?
      state :
      {
        ...state,
        rating: action.payload.rating
      }
  }
}, {})

const colors = handleActions({
  [C.ADD_COLOR]: (state, action) => ([
    ...state,
    color({}, action)
  ]),

  [C.RATE_COLOR]: (state, action) => {
    return state.map(
      c => color(c, action)
    )
  },

  [C.REMOVE_COLOR]: (state, action) => {
    return state.filter(
      c => c.id !== action.payload.id
    )
  }
}, [])

export default colors

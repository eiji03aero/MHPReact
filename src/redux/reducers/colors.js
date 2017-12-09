import C from '../constants.js'

const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR :
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        rating: 0,
        timeStamp: action.timeStamp
      }

    case C.RATE_COLOR :
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          rating: action.rating
        }

    default :
      return state
  }
}

const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR :
      return [
        ...state,
        color({}, action)
      ]

    case C.RATE_COLOR :
      return state.map(
        c => color(c, action)
      )

    case C.REMOVE_COLOR :
      return state.filter(
        c => c.id !== action.id
      )

    default :
      return state
  }
}

export default colors

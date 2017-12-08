import C from '../constants.js'

const widgets = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_ADD_COLOR_FORM :
      return Object.assign({}, state, {
        addColorFormIsOpen: action.reqState
      })

    default :
      return state
  }
}

export default widgets

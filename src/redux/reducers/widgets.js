import C from '../constants.js'

const widgets = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_ADD_COLOR_FORM :
      return action.reqState === 'toggle' ?
        ({
          ...state,
          addColorFormIsOpen: !state.addColorFormIsOpen
        }) :
        ({
          ...state,
          addColorFormIsOpen: action.reqState
        })

    default :
      return state
  }
}

export default widgets

import C from '../constants.js'
import { handleActions } from 'redux-actions'

const widgets = handleActions({
  [C.TOGGLE_ADD_COLOR_FORM]: (state, action) => {
    return action.payload.requestState === 'toggle' ?
      ({
        ...state,
        addColorFormIsOpen: !state.addColorFormIsOpen
      }) :
      ({
        ...state,
        addColorFormIsOpen: action.payload.requestState
      })
  }
}, {})

export default widgets

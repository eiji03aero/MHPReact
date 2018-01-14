import C from '../constants.js'
import { handleActions } from 'redux-actions'

const widgets = handleActions({
  [C.TOGGLE_ADD_COLOR_FORM]: (state, action) => {
    const nextState = action.payload.requestState === 'toggle' ?
      !state.addColorFormIsOpen :
      action.payload.requestState
    return {
      ...state,
      addColorFormIsOpen: nextState
    }
  }
}, {})

export default widgets

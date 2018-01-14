import C from '../constants.js'
import { createActions } from 'redux-actions'

const widgets =  createActions({
  [C.TOGGLE_ADD_COLOR_FORM]: (arg) => {
    let requestState

    switch (arg) {
      case 'open' :
        requestState = true
        break
      case 'close' :
        requestState = false
      default :
        requestState = 'toggle'
    }

    return ({ requestState })
  },
})

export default widgets

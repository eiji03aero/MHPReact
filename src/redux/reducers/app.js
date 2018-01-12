import C from '../constants.js'
import { handleActions } from 'redux-actions'

const app = handleActions({
  [C.REDIRECT_APP]: (state, action) =>({
    ...state,
    redirectPath: action.payload.redirectPath
  }),

  [C.RESET_REDIRECT_PATH]: (state, action) =>({
    ...state,
    redirectPath: ''
  }),

  [C.START_LOADING]: (state, action) =>({
    ...state,
    loading: true
  }),

  [C.FINISH_LOADING]: (state, action) =>({
    ...state,
    loading: false
  }),
}, {})

export default app

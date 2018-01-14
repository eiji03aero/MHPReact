import C from '../constants.js'
import { handleActions } from 'redux-actions'

const app = handleActions({
  [C.REDIRECT_APP]: (state, action) => ({
    ...state,
    redirectPath: action.payload.redirectPath
  }),

  [C.RESET_REDIRECT_PATH]: (state, action) => ({
    ...state,
    redirectPath: ''
  }),

  [C.ASYNC_START]: (state, action) => ({
    ...state,
    loading: true
  }),

  [C.ASYNC_FINISH]: (state, action) => ({
    ...state,
    loading: false
  }),

  [C.MAKE_ERROR_MESSAGE]: (state, action) => ({
    ...state,
    errorMessage: action.payload.errorMessage
  }),

  [C.DELETE_ERROR_MESSAGE]: (state, action) => ({
    ...state,
    errorMessage: ''
  })


}, {})

export default app

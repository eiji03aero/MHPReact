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

  [C.ASYNC_ERROR]: (state, action) => ({
    ...state,
    currentError: action.payload.error,
    showError: true
  }),


}, {})

export default app

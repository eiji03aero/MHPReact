import C from '../constants.js'
import { handleActions } from 'redux-actions'

const appActions = handleActions({
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

  [C.ASYNC_ERROR]: (state, action) => {
    const errors = Object.assign({}, state.errors, {
      currentError: action.payload.error,
      showError: true
    })
    return {
      ...state,
      errors
    }
  },

  [C.HIDE_POPUP]: (state, action) => {
    const errors = Object.assign({}, state.errors, {
      showError: false
    })
    return {
      ...state,
      errors
    }
  }

}, {})

export default appActions

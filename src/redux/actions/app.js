import C from '../constants.js'
import { createActions } from 'redux-actions'

const appActions = createActions(
  {
    [C.REDIRECT_APP]: (path) => { path }
  },

  C.RESET_REDIRECT_PATH,
  C.START_LOADING,
  C.FINISH_LOADING
)

export default appActions

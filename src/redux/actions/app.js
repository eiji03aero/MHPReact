import C from '../constants.js'
import { createActions } from 'redux-actions'

const appActions = createActions(
  {
    [C.REDIRECT_APP]: redirectPath => ({ redirectPath }),
    [C.ASYNC_ERROR]: error => ({ error })
  },

  C.RESET_REDIRECT_PATH,
  C.ASYNC_START,
  C.ASYNC_FINISH,
  C.DELETE_ERROR_MESSAGE
)

export default appActions

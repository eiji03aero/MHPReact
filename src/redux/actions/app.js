import C from '../constants.js'
import { createActions } from 'redux-actions'

const appActions = createActions(
  {
    [C.REDIRECT_APP]: redirectPath => ({ redirectPath }),
    [C.MAKE_ERROR_MESSAGE]: errorMessage => ({ errorMessage })
  },

  C.RESET_REDIRECT_PATH,
  C.ASYNC_START,
  C.ASYNC_FINISH,
  C.DELETE_ERROR_MESSAGE
)

export default appActions

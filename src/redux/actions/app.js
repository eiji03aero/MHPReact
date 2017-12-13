import C from '../constants.js'

export const redirectApp = path =>
  ({
    type: C.REDIRECT_APP,
    redirectPath: path
  })

export const resetRedirectPath = () =>
  ({
    type: C.RESET_REDIRECT_PATH
  })

import C from '../constants.js'

const app = (state = {}, action) => {
  switch (action.type) {
    case C.REDIRECT_APP :
      return {
        ...state,
        redirectPath: action.redirectPath
      }

    case C.RESET_REDIRECT_PATH :
      return {
        ...state,
        redirectPath: ''
      }

    case C.START_LOADING :
      return {
        ...state,
        loading: true
      }

    case C.FINISH_LOADING :
      return {
        ...state,
        loading: false
      }

    default :
      return state
  }
}

export default app

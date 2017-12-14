import C from '../constants.js'

const welcome_page = (state = {}, action) => {
  switch (action.type) {
    case (C.GET_TEST) :
      console.log('gets called')
      return {
        ...state,
        message: action.message
      }

    default :
      return state
  }
}

export default welcome_page

import C from '../constants.js'

const wiki = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_WIKI :
      return {
        id: action.id,
        name: action.name,
        body: action.body
      }

    default :
      return state
  }
}

const wikis = (state = [], action) => {
  switch (action.type) {
    case C.ADD_WIKI :
      return [
        ...state,
        wiki({}, action)
      ]

    case C.REMOVE_WIKI :
      return state.filter(
        c => c.id !== action.id
      )

    default :
      return state
  }
}

export default wikis

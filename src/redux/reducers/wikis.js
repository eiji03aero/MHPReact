import C from '../constants.js'

const wiki = (state = {}, action) => {
  switch (action.type) {
    case C.CREATE_WIKI :
      return {
        _id: action._id,
        title: action.title,
        body: action.body
      }

    case C.UPDATE_WIKI :
      return {
        ...state,
        title: action.title,
        body: action.body
      }

    default :
      return state
  }
}

const wikis = (state = [], action) => {
  switch (action.type) {
    case C.GET_ALL_WIKI :
      return [
        ...action.wikis
      ]

    case C.CREATE_WIKI :
      return [
        ...state,
        wiki({}, action)
      ]

    case C.UPDATE_WIKI :
      return state.map(wiki => {
        return wiki._id === action._id ?
          wiki({}, action) :
          wiki
      })

    case C.REMOVE_WIKI :
      return state.filter(
        c => c._id !== action._id
      )

    default :
      return state
  }
}

export default wikis

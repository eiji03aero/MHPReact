import C from '../constants.js'
import { handleActions } from 'redux-actions'


const wikiReducer = handleActions({
  [C.CREATE_WIKI]: (state, action) => {
    const { _id, title, body } = action.payload.wiki
    return {
      _id,
      title,
      body
    }
  },

  [C.UPDATE_WIKI]: (state, action) => {
    const { title, body } = action.payload.wiki
    return {
      ...state,
      title,
      body
    }
  },
}, {})

const wikisReducer = handleActions({
  [C.GET_ALL_WIKI]: (state, action) =>
    [...action.payload.wikis],

  [C.CREATE_WIKI]: (state, action) =>
    state.concat(wikiReducer(state, action)),

  [C.UPDATE_WIKI]: (state, action) =>
    state.map(wiki =>
      wiki._id === action.payload.wiki._id ?
        wikiReducer({}, action) :
        wiki
    ),

  [C.DELETE_WIKI]: (state, action) =>
    state.filter(wiki => wiki._id !== action.payload._id)
}, [])

export default wikisReducer

import C from '../constants.js'
import { v4 } from 'uuid'

export const addWiki = (name, body) =>
  ({
    type: C.ADD_WIKI,
    name,
    body,
    timeStamp: new Date().toString()
  })

export const removeWiki = (id) =>
  ({
    type: C.REMOVE_WIKI,
    id
  })

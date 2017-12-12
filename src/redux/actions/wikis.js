import C from '../constants.js'
import { v4 } from 'uuid'

export const addWiki = (title, body) =>
  ({
    type: C.ADD_WIKI,
    id: v4()
    title,
    body,
    timeStamp: new Date().toString()
  })

export const removeWiki = (id) =>
  ({
    type: C.REMOVE_WIKI,
    id
  })

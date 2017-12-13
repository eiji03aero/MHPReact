import C from '../constants.js'
import { v4 } from 'uuid'

export const createWiki = (title, body) =>
  ({
    type: C.CREATE_WIKI,
    id: v4(),
    title: title,
    body: body,
    timeStamp: new Date().toString()
  })

export const updateWiki = (id, title, body) =>
  ({
    type: C.UPDATE_WIKI,
    id,
    title,
    body
  })

export const removeWiki = (id) =>
  ({
    type: C.REMOVE_WIKI,
    id
  })

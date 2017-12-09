import C from '../constants.js'
import { v4 } from 'uuid'

export const addColor = (title, color) =>
  ({
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timeStamp: new Date().toString()
  })

export const rateColor = (rating, id) =>
  ({
    type: C.RATE_COLOR,
    id,
    rating
  })

export const removeColor = (id) =>
  ({
    type: C.REMOVE_COLOR,
    id
  })

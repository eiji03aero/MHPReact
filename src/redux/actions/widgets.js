import C from '../constants.js'

export const openAddColorForm = () =>
  ({
    type: C.TOGGLE_ADD_COLOR_FORM,
    reqState: true
  })

export const closeAddColorForm = () =>
  ({
    type: C.TOGGLE_ADD_COLOR_FORM,
    reqState: false
  })

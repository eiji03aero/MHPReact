import C from '../constants.js'

export const toggleAddColorForm = (arg) => {
  let reqState
  switch (arg) {
    case 'open' :
      reqState = true
      break
    case 'close' :
      reqState = false
    default :
      reqState = 'toggle'
  }
  return ({
    type: C.TOGGLE_ADD_COLOR_FORM,
    reqState: reqState
  })
}

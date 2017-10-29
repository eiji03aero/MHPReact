import { wikiDispatcher } from './wikiDispatcher.js'

export const ActionType = {
  CHANGE_NAME: 'CHANGE_NAME',
  CHANGE_BODY: 'CHANGE_BODY'
}

export const Actions = {
  changeName: (name) => {
    if (name === null) return
    wikiDispatcher.dispatch({
      actionType: ActionType.CHANGE_NAME,
      value: name
    })
  },
  changeBody: (body) => {
    if (body === null) return
    wikiDispatcher.dispatch({
      actionType: ActionType.CHANGE_BODY,
      value: body
    })
  }
}

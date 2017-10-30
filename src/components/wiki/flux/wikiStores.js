import { wikiDispatcher } from './wikiDispatcher.js'
import { ActionType } from './wikiActions.js'

export const nameStore = { name: '', onChange: null }
export const bodyStore = { body: '', onChange: null }

wikiDispatcher.register(payload => {
  if (payload.actionType === ActionType.CHANGE_NAME) {
    nameStore.name = payload.value
    nameStore.onChange()
  }
  if (payload.actionType === ActionType.CHANGE_BODY) {
    bodyStore.body = payload.value
    bodyStore.onChange()
  }
})

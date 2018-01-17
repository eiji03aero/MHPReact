const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-storage'] = JSON.stringify(store.getState())
  return result
}

export default saver

import appActions from '../actions/app.js'

const asyncMiddleware = store => next => action => {
  if (isPromise(action)) {
    store.dispatch(appActions.asyncStart())
    action.payload.promise.then(
      res => {
        console.log('res: ', JSON.stringify(res))
        action.payload = res

        store.dispatch(appActions.asyncFinish())
        store.dispatch(action)
      },
      err => {
        console.log('error: ', err)

        store.dispatch(appActions.asyncFinish())
        store.dispatch(appActions.makeErrorMessage(err))
      }
    )
    return
  }
  next(action)
}

const isPromise = (action) => {
  if (action.payload && action.payload.promise) {
    return typeof action.payload.promise.then === 'function'
  }
  return false
}

export default asyncMiddleware

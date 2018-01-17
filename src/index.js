import 'babel-polyfill'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './redux/store'
import registerServiceWorker from './registerServiceWorker'

const store = storeFactory()

const render = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  )
}

// for debug
window.store = store

store.subscribe(render)
render()
registerServiceWorker()
